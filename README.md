# HIKARI🕯️ - a candle E-commerce Web Application

This is a full-stack e-commerce application for managing and selling candles. The project includes an **admin panel** for managing products and a **customer-facing store** where users can browse, add products to their cart, and complete purchases.

The application was originally built as a **school group project by a team of four developers**. This repository is my own continuation of that work, adapted for deployment on Vercel.

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript
- **State Management:** React Context API
- **Styling:** Material UI (MUI)
- **Database:** Prisma ORM with Prisma Postgres
- **Validation:** Zod & React Hook Form
- **Server Actions:** Next.js Server Actions for handling CRUD operations directly with Prisma
- **Routing:** Next.js dynamic routing
- **Persistence:** Local Storage for cart and form data
- 🚀 **Vercel** – Hosting & deployment

---

## Assignment description in NextJs

This project is a **webshop application** built using **React, Next.js, TypeScript, and Material UI (MUI)**. The assignment required us to build an e-commerce store with the following **mandatory pages**:  
**Home** – List products  
**Product Page** – Show product details  
**Checkout Page** – Handle purchases  
**Confirmation Page** – Display order details  
**Admin Panel** – CRUD functionality (Add, Edit, Delete products)

## 📌 Features

### 📋 **Admin Panel (CRUD)**

- **Create:** Add new products
- **Read:** View a list of all products
- **Update:** Edit existing products
- **Delete:** Remove products from the database

### 🛒 **Shopping Cart & Checkout**

- Add products to the cart
- Adjust product quantity
- Remove items from the cart
- Save cart state in **LocalStorage**
- Fill in shipping details
- Place an order and receive a confirmation page

### 📦 **Order Management**

- Generate a **unique order number**
- Store customer details in the database
- Display order summary on the confirmation page
- Clear LocalStorage after checkout

---

## 🌍 Live Demo

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Peter-WebDev/hikari-webshop.git
```

## Installation

### Run the following command to install all dependencies:

```bash
npm install # Recommended
# or
pnpm install
# or
yarn install
# or
bun install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
