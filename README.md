# 📘 Machao Demo Tasks – Full Stack Submission

This repository contains two complete systems built to demonstrate backend architecture, business logic enforcement, transactional safety, and concurrency-safe inventory management, along with minimal frontend implementations.

Each task includes:
A backend that enforces all business rules
A lightweight frontend used only to interact with the APIs

## 📂 Repository Structure
```
Machao-Demo-Tasks/
 ├── task-1-grocery-backend/
 ├── task-1-grocery-frontend/
 ├── task-2-inventory-backend/
 └── task-2-inventory-frontend/
```

(Frontends are minimal and exist only to interact with the APIs. All logic is handled on the backend.)

## 🟦 Task 1 – Mini Grocery Order System
🧱 Tech Stack

Backend

Node.js

Express

MySQL (InnoDB)

Sequelize

Frontend

Ionic / Angular
(or simple UI calling the backend APIs)

📁 Backend Architecture
controllers/
services/
repositories/
models/
config/
app.js

Layer	Responsibility
Controllers	Handle HTTP requests & responses
Services	Business logic (stock validation, pricing, transactions)
Repositories	Database queries only
Models	Database schema mapping
📊 Database Schema
Product

id

name

price

stock

Order

id

productId

quantity

totalPrice

createdAt

🔌 APIs (Strict)
Method	Endpoint
GET	/products
POST	/orders

No other endpoints exist.

🧠 Order Processing

The backend:

Validates product existence

Checks available stock

Prevents invalid orders

Calculates total price

Deducts stock

Creates the order

All operations run inside one database transaction.

🖥️ Frontend Role

The frontend:

Displays product list

Allows placing orders

It does not handle stock, price, or validation logic.

🟦 Task 2 – Inventory Allocation System
🧱 Tech Stack

Backend

Node.js

Express

MySQL (InnoDB)

Sequelize

Frontend

React

Flutter

(Both use the same backend API.)

📁 Backend Architecture
routes/
controllers/
services/
repositories/
models/
config/
app.js

📊 Database Schema
Product

id

name

stock

Order

id

productId

quantity

status

🔌 API (Strict)
Method	Endpoint
POST	/order

This single API performs:

Product validation

Stock validation

Stock deduction

Order creation

Concurrency protection

🔒 Concurrency Handling

The backend uses:

SELECT ... FOR UPDATE


inside a database transaction to lock the product row while an order is being processed.

This ensures:

Only one request can use stock at a time

Other requests wait

Overselling is impossible

🧪 Concurrency Test Case

Stock = 5
Two users order 3 units simultaneously:

User	Result
User 1	Success
User 2	Fails (Insufficient stock)
🖥️ Frontend Role

React and Flutter frontends:

Send order requests to the backend

Display success or failure

All stock and concurrency logic is handled on the backend.

🏁 Final Summary

This submission demonstrates:

Clean separation of concerns

Transaction-safe order handling

Strict API discipline

Database-level race-condition protection

Real-world inventory and ordering behavior

These systems reflect how production-grade backends handle orders, payments, and stock safely under concurrent usage.
