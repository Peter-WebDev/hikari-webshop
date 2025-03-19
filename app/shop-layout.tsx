"use client"; // Important: This makes it a Client Component

import { PropsWithChildren } from "react";
import CartProvider from "./providers/cart-provider"; // Adjust the path

export default function ShopLayout({ children }: PropsWithChildren) {
    return <CartProvider>{children}</CartProvider>;
}