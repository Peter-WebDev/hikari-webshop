"use client";

import { deleteProduct, updateEditedProduct } from "@/app/actions";
import { productSchema } from "@/app/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type ProductForm = z.infer<typeof productSchema>;
export default function EditProductForm({ product }: { product: ProductForm & { id: string } }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  });

  //Uppdatera produkt
  const onSubmit = async (data: ProductForm) => {
    await updateEditedProduct(product.id, data);
    reset();
  };

  //Radera produkt
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(product.id);
      router.push("/admin"); //Skicka tillbaka till admin efter delete
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}>
      <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Edit product
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
            label="Title Sign"
            type="text"
            {...register("titleSign")}
            error={!!errors.titleSign}
            helperText={errors.titleSign?.message}
          />

          <TextField
            label="Title Sign Color"
            type="color"
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
            multiline
            rows={3}
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
            label="Dark Image URL"
            type="text"
            {...register("imageDark")}
            error={!!errors.imageDark}
            helperText={errors.imageDark?.message}
          />

          <TextField
            label="Slogan"
            type="text"
            {...register("slogan")}
            error={!!errors.slogan}
            helperText={errors.slogan?.message}
          />

          <TextField
            label="Note"
            type="text"
            {...register("note")}
            multiline
            rows={2}
            error={!!errors.note}
            helperText={errors.note?.message}
          />

          <TextField
            label="Weight"
            type="text"
            {...register("weight")}
            error={!!errors.weight}
            helperText={errors.weight?.message}
          />

          <TextField
            label="Brand"
            type="text"
            {...register("brand")}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />

          <TextField
            label="Height"
            type="text"
            {...register("height")}
            error={!!errors.height}
            helperText={errors.height?.message}
          />

          <TextField
            label="Diameter"
            type="text"
            {...register("diameter")}
            error={!!errors.diameter}
            helperText={errors.diameter?.message}
          />

          {/*Spara ändringar-knapp */}
          <Button type="submit" variant="contained" color="secondary">
            Save Changes
          </Button>

          {/*Ta bort produkt-knapp */}
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};