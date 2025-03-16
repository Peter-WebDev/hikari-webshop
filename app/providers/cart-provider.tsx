import { Product } from "@/data";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface CartItem extends Product {
  quantity: number; // The amount the user has put in the cart, updates dynamically
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext({} as CartContextType);

export default function CartProvider(props: PropsWithChildren) {
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

  // Add to cart, only one at a time (for home page)
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      // If product already exists in cart, increase the quantity of the product by 1
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        // Else, add the product to cart
      } else {
        return [...prev, { ...item, quantity: 1 }]; // Start with 1
      }
    });
  };

// Add to cart based on chosen quantity (for product page)
  const addToCartWithQuantity = (item: CartItem, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };
}
