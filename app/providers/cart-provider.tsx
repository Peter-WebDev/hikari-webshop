"use client";

import { Product } from "@/data";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartItem extends Product {
  quantity: number; // The amount the user has put in the cart, updates dynamically
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  addToCartWithQuantity: (item: CartItem, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextType);

export default function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Check if there's any cart data saved in localStorage
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
    console.log("Updated Cart:", cartItems);
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

  // Handles increase and decrease of a products quantity in the cart
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(0, quantity) }
            : cartItem
        )
        // Remove the product if quantity reaches 0
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  // Calculates total price for the quantity of products in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Empty cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addToCartWithQuantity,
        updateQuantity,
        removeFromCart,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
