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
  imageDark: z.string().url("Product image must be a valid url").optional(),
  titleSign: z.string().min(1, "Title sign must be at least 1 character").optional(),
  
  // Regex to check hex value, 6 chars (#RRGGBB)
  // Refine to check color contrast
  titleSignColor: z.string()
    .regex(/^#([0-9A-Fa-f]{6})$/, "Title sign color must be a valid hex color")
    .refine(
      (color) => {
        // Convert hex to RGB
        const hex = color.replace('#', '');
        let r, g, b;

        if (hex.length === 3) {
          // #RGB format
          r = parseInt(hex[0] + hex[0], 16);
          g = parseInt(hex[1] + hex[1], 16);
          b = parseInt(hex[2] + hex[2], 16);
        } else {
          // #RRGGBB format
          r = parseInt(hex.substring(0, 2), 16);
          g = parseInt(hex.substring(2, 4), 16);
          b = parseInt(hex.substring(4, 6), 16);
        }

        // Your background color (example: white #FFFFFF)
        const bgR = 237;
        const bgG = 237;
        const bgB = 233;

        // Calculate perceived brightness using weighted RGB (simplified luminance formula)
        // This uses the perceived brightness formula: (0.299*R + 0.587*G + 0.114*B)
        // Note: This is a simplification of the WCAG contrast formula but works for basic validation
        const colorLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        const bgLuminance = (0.299 * bgR + 0.587 * bgG + 0.114 * bgB) / 255;

        const contrast = Math.abs(colorLuminance - bgLuminance);

        // Minimum contrast threshold (e.g., 0.3 for moderate contrast, 0.5-0.6 for more stricter contrast)
        return contrast > 0.4;
      },
      {
        message: "Color doesn't have enough contrast with the background"
      }
    )
    .optional(),
  titleDescription: z.string().optional(),
  titleWithDescription: z.string().optional(),
  slogan: z.string().optional(),
  note: z.string().optional(),
  brand: z.string().optional(),
  weight: z.coerce.number().min(1, "Weight must be at least 1").optional(),
  length: z.coerce.number().min(1, "Length must be at least 1").optional(),
  height: z.coerce.number().min(1, "Height must be at least 1").optional(),
  diameter: z.coerce.number().min(1, "Diameter must be at least 1").optional(),
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
    <Container component="main" maxWidth="sm" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}>
      <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          <TextField
            label="Product Name/title"
            type="text"
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
            type="text"
            {...register("description")}
            multiline rows={3}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <TextField
            label="Image URL"
            type="text"
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image?.message}
          />

          <TextField
            label="Image Dark URL"
            type="text"
            {...register("imageDark")}
            error={!!errors.imageDark}
            helperText={errors.imageDark?.message}
          />

          <TextField
            label="Title sign"
            type="text"
            {...register("titleSign")}
            error={!!errors.titleSign}
            helperText={errors.titleSign?.message}
          />

          <TextField
            label="Title sign color"
            type="color"
            defaultValue="#000000"
            {...register("titleSignColor")}
            error={!!errors.titleSignColor}
            helperText={errors.titleSignColor?.message}
          />

          <TextField
            label="Title Description"
            type="text"
            {...register("titleDescription")}
            error={!!errors.titleDescription}
            helperText={errors.titleDescription?.message}
          />

          <TextField
            label="Title With Description"
            type="text"
            {...register("titleWithDescription")}
            error={!!errors.titleWithDescription}
            helperText={errors.titleWithDescription?.message}
          />

          <TextField
            label="Slogan"
            type="text"
            {...register("slogan")}
            error={!!errors.slogan}
            helperText={errors.slogan?.message}
          />

          <TextField
            label="Note of the candle"
            type="text"
            {...register("note")}
            error={!!errors.note}
            helperText={errors.note?.message}
          />

          <TextField
            label="Brand name"
            type="text"
            {...register("brand")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />

          <TextField
            label="Product weight"
            type="number"
            {...register("weight")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />

          <TextField
            label="Product length"
            type="number"
            {...register("length")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />

          <TextField
            label="Product height"
            type="number"
            {...register("height")}
            error={!!errors.height}
            helperText={errors.height?.message}
          />

          <TextField
            label="Product diameter"
            type="number"
            {...register("diameter")}
            error={!!errors.diameter}
            helperText={errors.diameter?.message}
          />

          <Button type="submit" variant="contained" color="secondary" data-cy="admin-add-product">
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