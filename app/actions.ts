"use server";

import { CartItem } from "@/data";
import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { customAlphabet, nanoid } from "nanoid/non-secure";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { productSchema } from "./utils/validation";

// Create a custom nanoid generator that only uses numbers. Length set to 15.
const generateRandomDigits = customAlphabet("0123456789", 15);

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

  redirect("/admin");
}

//Uppdatera editerad produkt i databasen
export async function updateEditedProduct(
  articleNumber: string,
  data: z.infer<typeof productSchema>
) {
  console.log("ID received:", articleNumber);
  try {
    // Fetch the existing product first
    const existingProduct = await db.product.findUnique({
      where: { articleNumber },
    });

    if (!existingProduct) {
      throw new Error(`Product width ID ${articleNumber} not found`);
    }

    // Validate the data
    const validatedData = productSchema.parse(data);

    // Merge validated data with existing articleNumber
    // Ensures we don't try to update the articleNumber field
    const dataToUpdate = {
      ...validatedData,
      articleNumber: existingProduct.articleNumber,
    };

    console.log("Data to update:", dataToUpdate);

    const updatedProduct = await db.product.update({
      where: { articleNumber },
      data: dataToUpdate,
    });

    console.log("Sucessfully updated product:", updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    // Rethrow NEXT_REDIRECT if it's the cause
    if (error && (error as any).digest === "NEXT_REDIRECT") {
      throw error;
    }
    throw new Error(`Could not update product: ${(error as Error).message}`);
  }
  // Redirect to the products list instead of edit page
  revalidatePath("/admin");
  redirect("/admin");
}

//Ta bort produkt i databasen
export async function deleteProduct(articleNumber: string) {
  try {
    await db.product.delete({
      where: { articleNumber },
    });

    revalidatePath("/admin");
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Could not delete product");
  }
}

export async function createOrder(
  customer: Prisma.CustomerCreateInput,
  cartItems: CartItem[]
) {
  try {
    //För att generera ett unikt ordernr
    const orderNumber = nanoid(10);

    //Beräknar totalpriset baserat på innehållet i kundvagnen
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    //Skapa ordern i db
    const order = await db.order.create({
      data: {
        orderNumber,
        totalPrice,
        customer: { create: customer },
        orderItems: {
          create: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    if (order) {
       // Return success with order data that can be used client-side
      return {
        success: true,
        orderNumber: order.orderNumber,
        orderId: order.id,
        totalPrice: order.totalPrice
      };
    }

    //Skicka tillbaka ordernumret
    return { success: false, message: "Order creation failed" };
  } catch (error) {
    console.error("Error creating order:", error);
    return { success: false, message: "Could not create order" };
  }
}

//KOMMENTAR TILL KOD:
//serverfunktionen createProduct: tar emot formulärdatan, validerar den med zod, sparar produkten i db via Prisma och uppdaterar sen sidan och omdirigerar tillbaka till /admin/add-product via
//  revalidatePath("/admin/add-product"); och redirect("/admin/add-product");
//safeParse: kontrollerar att datan följer vårt productSchema, skulle datan vara fel returneras en lista med felmeddelanden
//await db.product.create({ data }); Lägger till produkten i vår db genom att använda Prisma
//Ta upp, vilket vill vi ha?:
//price: z.number().min(1): användaren måste skriva ett nr
//price: z.coerce.number().min(1): här kan en sträng konverteras till ett nr automatiskt och är därför inte lika strikt.
