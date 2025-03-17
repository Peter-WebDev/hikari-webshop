import { z } from "zod";

export const productSchema = z.object({
    title: z.string().min(3, "Product title must be at least 3 characters"),
    price: z.number().min(1, "Price must be at least 1"),
    description: z.string().min(3, "Product description must be at least 3 characters"),
    image: z.string().url("Product image must be a valid url"),
});