import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Product title must be at least 3 characters"),
  titleSign: z.string().optional().nullable(),
  titleSignColor: z.string().optional().nullable(),
  titleDescription: z.string().optional().nullable(),
  titleWithDescription: z.string().optional().nullable(),
  description: z
    .string()
    .min(3, "Product description must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be positive"),
  image: z.string().url("Product image must be a valid url"),
  imageDark: z
    .string()
    .url("Dark image must be a valid URL")
    .optional()
    .nullable()
    .or(z.literal("")), // Allow empty string
  slogan: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
  weight: z.string().optional().nullable(),
  brand: z.string().optional().nullable(),
  height: z.string().optional().nullable(),
  diameter: z.string().optional().nullable(),
  articleNumber: z.string().optional(), // Include but make it optional
});
