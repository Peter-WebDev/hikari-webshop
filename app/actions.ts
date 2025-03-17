"use server";

import { db } from "@/prisma/db";
import { customAlphabet } from "nanoid/non-secure";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Create a custom nanoid generator that only uses numbers. Length set to 15.
const generateRandomDigits = customAlphabet("0123456789", 15);

const productSchema = z.object({
  title: z.string().min(3, "Product title must be at least 3 characters"),
  price: z.number().min(1, "Price must be at least 1"),
  description: z
    .string()
    .min(3, "Product description must be at least 3 characters"),
  image: z.string().url("Product image must be a valid url"),
});

//Skapa produkt i databasen
export async function createProduct(data: any) {
  const validationResult = productSchema.safeParse(data);
  if (!validationResult.success) {
    return { success: false, errors: validationResult.error.format() };
  }

  // Generate a custom numeric article number with prefix "300"
  const articleNumber = `300${generateRandomDigits()}`;

  // Added articleNumber to the data object
  // to override with newly generated value
  // Spread operator to include all properties
  // from the the existing data object
  await db.product.create({
    data: {
      ...data,
      articleNumber,
    },
  });

  revalidatePath("/admin/add-product");
  redirect("/admin/add-product");
}

//KOMMENTAR TILL KOD:
//serverfunktionen createProduct: tar emot formulärdatan, validerar den med zod, sparar produkten i db via Prisma och uppdaterar sen sidan och omdirigerar tillbaka till /admin/add-product via
//  revalidatePath("/admin/add-product"); och redirect("/admin/add-product");
//safeParse: kontrollerar att datan följer vårt productSchema, skulle datan vara fel returneras en lista med felmeddelanden
//await db.product.create({ data }); Lägger till produkten i vår db genom att använda Prisma
//Ta upp, vilket vill vi ha?:
//price: z.number().min(1): användaren måste skriva ett nr
//price: z.coerce.number().min(1): här kan en sträng konverteras till ett nr automatiskt och är därför inte lika strikt.
