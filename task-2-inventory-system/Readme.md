# Inventory Allocation System – Demo Task 2

This project implements a concurrency-safe inventory system designed to test race condition handling and atomic order processing.

The goal is to ensure stock is never oversold when multiple users place orders simultaneously.

---

## 🧱 Tech Stack
- Node.js
- Express
- MySQL (InnoDB)
- Sequelize ORM

---

## 📁 Project Structure

```
routes/
controllers/
services/
repositories/
models/
config/
app.js
```

Each layer has a single responsibility:
- Routes → map endpoints
- Controllers → handle requests
- Services → business logic
- Repositories → database operations
- Models → schema mapping

---

## 📊 Database Schema

### Product
- id
- name
- stock

### Order
- id
- productId
- quantity
- status

---

## 🔌 API (Strict Rule)

Only one API exists:

| Method | Endpoint |
|------|---------|
| POST | /order |

This single endpoint handles:
- Product validation
- Stock validation
- Stock deduction
- Order creation
- Race condition prevention

---

## 🔒 How Race Conditions Are Prevented

The backend uses:

```sql
SELECT ... FOR UPDATE
```

inside a transaction to lock the product row while an order is being processed.

This guarantees:
- Only one order can access stock at a time
- Other requests must wait
- Updated stock is always read correctly

---

## 🧪 Concurrency Test Case

Initial stock = 5  
Two users try to order 3 units simultaneously

| Request | Result |
|--------|-------|
| User 1 | Success |
| User 2 | Fails (Insufficient stock) |

This proves the backend prevents overselling.

---

## 🏁 Conclusion

This system demonstrates:
- Database-level locking
- Transactional integrity
- Real-world concurrency handling
- Production-grade inventory management

It simulates how large e-commerce systems safely manage inventory under high load.
