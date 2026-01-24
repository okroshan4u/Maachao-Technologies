# Mini Grocery Order System – Demo Task 1

This project implements a backend-driven grocery ordering system designed to evaluate backend architecture, business logic enforcement, and API discipline.

The system ensures that all stock handling and order creation logic is handled strictly on the backend using a clean layered architecture.

---

## 🧱 Tech Stack
- Node.js
- Express
- MySQL (InnoDB)
- Sequelize ORM

---

## 📁 Project Structure

```
controllers/
services/
repositories/
models/
config/
app.js
```

| Layer | Responsibility |
|------|----------------|
| Controllers | Handle HTTP requests & responses |
| Services | Business logic (stock validation, price calculation, transactions) |
| Repositories | Database queries only |
| Models | Database schema mapping |

This strict separation ensures maintainability and prevents logic leakage into controllers or frontend.

---

## 📊 Database Schema

### Product
- id
- name
- price
- stock

### Order
- id
- productId
- quantity
- totalPrice
- createdAt

---

## 🔌 Allowed APIs (Strict)

Only two APIs are implemented:

| Method | Endpoint | Purpose |
|------|--------|--------|
| GET | /products | Fetch product list |
| POST | /orders | Place an order (handles all logic) |

No other API exists.

---

## 🧠 Order Flow (POST /orders)

When a request is sent:

1. Product existence is checked  
2. Available stock is validated  
3. Order is rejected if stock is insufficient  
4. Stock is reduced  
5. Order record is created  

All operations run inside **one database transaction** to ensure atomicity.

---

## 🔒 Why Transactions Are Used

If any step fails, the entire operation is rolled back, preventing:
- Partial stock reduction
- Incorrect order creation
- Data inconsistency

---

## 🖥️ Frontend Responsibility

The frontend only:
- Displays products
- Sends productId & quantity

All validation and business logic is handled by the backend.

---

## 🏁 Conclusion

This project demonstrates:
- Clean backend architecture
- Transaction-safe stock handling
- API discipline
- Separation of concerns

It simulates how a real e-commerce backend should work.
