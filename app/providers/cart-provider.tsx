import { Product } from "@/data";

export interface CartItem extends Product {
  quantity: number; // The amount the user has put in the cart, updates dynamically
}

export default function CartProvider() {}
