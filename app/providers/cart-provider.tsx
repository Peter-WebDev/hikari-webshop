import { Product } from "@/data";
import { createContext, useEffect, useState } from "react";

export interface CartItem extends Product {
  quantity: number; // The amount the user has put in the cart, updates dynamically
}

interface CartContextType {
  cartItems: CartItem[];
}

const CartContext = createContext({} as CartContextType);

export default function CartProvider() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //   Check if there's any cart data saved in localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try { 
        // Attempt to parse cart data from localStorage
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart data:", error);
        // Fallback to an empty cart if parsing fails
        setCartItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever the cart is updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
}
