# 🐾 Pet Shop Web Application (Node.js)

## 📌 Introduction

This is a **Pet Shop web application** built using **Node.js, Express, MySQL, and EJS**.
The system allows users to browse pets (dogs & cats), purchase products, manage carts, and place orders.

---

## 🚀 Features

### 👤 Customer

* View pets (dogs & cats)
* View pet details
* Browse accessories, foods, and services
* Add items to cart
* Apply discount coupons
* Place orders
* Register & login

### 🛒 Shopping System

* Cart management (add, update, remove)
* Order creation
* Order history
* Coupon system (percentage / fixed discount)

### 🛠️ Admin (basic)

* Manage pets
* Manage orders
* Manage coupons

---

## 🏗️ Technologies Used

* **Backend:** Node.js, Express
* **Database:** MySQL (XAMPP / phpMyAdmin)
* **Frontend:** EJS, Bootstrap
* **Other:** express-session, dotenv, mysql2

---

## 📂 Project Structure

```
pet-shop-nodejs/
├── .env
├── server.js
├── package.json
├── sql/
│   ├── database.sql
│   └── sample_data.sql
├── src/
│   ├── config/db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── views/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
```

---

## ⚙️ Installation & Setup

### 1. Clone project

```bash
git clone https://github.com/your-username/your-repo-name.git
cd pet-shop-nodejs
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Database

* Open **XAMPP**
* Start **MySQL**
* Go to **phpMyAdmin**
* Create database:

```sql
CREATE DATABASE pet_shop;
```

* Import file:

```
sql/database.sql
sql/sample_data.sql
```

---

### 4. Configure environment

Edit `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=pet_shop
SESSION_SECRET=mysecretkey
```

---

### 5. Run server

```bash
npm run dev
```

---

### 6. Open website

```
http://localhost:3000
```

---

## 👤 Demo Accounts

* **Customer:**
  Phone: `0912345678`

* **Admin:**
  URL: `/admin/login`
  Username: `admin`
  Password: `123456`

---

## 🧠 Database Overview

Main tables:

* `pets`
* `pet_details`
* `customers`
* `employees`
* `orders`
* `order_items`
* `accessories`
* `foods`
* `services`
* `coupons`
* `reviews`
* `appointments`
* `carts`, `cart_items`

---

## 🔮 Future Improvements

* Upload real images for pets/products
* Online payment integration
* Advanced admin dashboard
* Search & filter system
* Responsive UI improvements

---

## 👨‍💻 Author

* **Name:** Pham Thi Linh Chi
* **Project:** Pet Shop Management System

---

## 📄 License

This project is for educational purposes.
