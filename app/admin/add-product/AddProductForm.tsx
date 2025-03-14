"use client";

import { createProduct } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

const productSchema = z.object({
    title: z.string().min(3, "Product title must be at least 3 characters"),
    price: z.coerce.number().min(1, "Price must be at least 1"),
    description: z.string().min(3, "Product description must be at least 3 characters"),
    image: z.string().url("Product image must be a valid url"),
});

export type Product = z.infer<typeof productSchema>;

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: Product) => {
    console.log("Submitting data", data);
    await createProduct(data);
    reset();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          <TextField
            label="Product Name/title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Price"
            type="number"
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <TextField
            label="Product description"
            {...register("description")}
            multiline rows={3}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            label="Image URL"
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image?.message}
          />

          <Button type="submit" variant="contained" color="primary" data-cy="admin-add-product">
            Add New Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
  //KOMMENTAR TILL KOD:
  //React hook form används för att hantera formuläret. Zod används för att validera användarinmatningarna. När man skickar förmuläret sparas den i databasen genom en funktion i filen actions.ts (därav import from app/actions).
  //export type Product: för att kunna använda typen Product i hela applikationen och innehåller samma som productSchema. 
  //useForm, kopplas med zodResolvern
  //register: kopplar formulärens fält med react hook form
  //handleSubmit: gör att funktionen onSUbmit körs när man skickar in formuläret. reset: rensar sen formuläret efter man skickat in det. 
  //errors kollar av valideringsfel från zod
  //OnSubmit för att hantera inlämningen av formuläret samt rensa det. Anropar createProduct(data) och sparar produkten i databasen.