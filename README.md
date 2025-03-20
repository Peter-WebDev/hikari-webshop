# HIKARI🕯️ - a candle E-commerce Web Application

This is a full-stack e-commerce application for managing and selling candles. The project includes an **admin panel** for managing products and a **customer-facing store** where users can browse, add products to their cart, and complete purchases.

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript
- **State Management:** React Context API
- **Styling:** Material UI (MUI)
- **Database:** Prisma ORM with SQLite
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

🚀 **Coming soon...** _(Deployed on Vercel)_

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/plugga-tech/nextjs-webshop-ts-react-akarui.git
```

## Installation

### Run the following command to install all dependencies:

```bash
npm install # Recommended
# or
pnpm install
# or
yarn install
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

## 📂 Project requirements

### Krav för Godkänt

- [ ] Git & GitHub har använts
- [ ] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!
- [ ] Ett designsystem används som exempelvis Shadcn eller MUI

**Home**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Startsidan ska lista samtliga produkter.
- [ ] Det ska gå att lägga till produkter i kundvagnen (header + toast).
- [ ] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [ ] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Detaljsidan ska visa all info om en produkt.
- [ ] Det ska gå att lägga till produkten i kundvagnen (header + toast).
- [ ] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [ ] Ska ha en övergripande layout med header, main & footer.
- [ ] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [ ] Det ska gå att se det totala priset i kundvagnen.
- [ ] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris).
- [ ] Det ska gå att ange leveransuppgifter i ett formulär.
- [ ] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [ ] Formulären vid utcheckningen ska gå att automatiskt fyllas i.
- [ ] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter

**Admin**

- [ ] Det finns en admin-sida för produkthantering
- [ ] Det ska gå att se alla produkter på admin sidan
- [ ] Det går att lägga till produkter via admin sidan
- [ ] Det går att ta bort produkter via admin sidan
- [ ] Det går att redigera produkter via admin sidan
- [ ] Samtliga fält för adminsidans formulär ska ha valideringsregler
