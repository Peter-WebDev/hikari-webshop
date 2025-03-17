"use client";

import { deleteProduct, productSchema, updateEditedProduct } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";



export type ProductForm = z.infer<typeof productSchema>;
export default function EditProductForm({ product }: { product: ProductForm }) {
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
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Edit product
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
  
            {/*Spara ändringar-knapp */}
            <Button type="submit" variant="contained" color="primary">
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