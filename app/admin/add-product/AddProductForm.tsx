"use-client";

import { createProduct } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

const productSchema = z.object({
    id: z.string().min(3, "Product id must be at least 3 strings"),
    articleNumber: z.string().min(3, "Product id must be at least 3 strings"),
    title: z.string().min(3, "Product title must be at least 3 characters"),
    price: z.coerce.number().min(1, "Price must be at least 1"),
    description: z.string().min(3, "Product description must be at least 3 characters"),
    image: z.string().min(3, "Product image must be at least 3 characters"),
});

export type Product = z.infer<typeof productSchema>;

export default function AddProductForm () {
    const {
        register,
        handleSubmit, 
        reset,
        formState: { errors }, 
    } = useForm<Product>({
        resolver: zodResolver(productSchema),
    });

    const onSubmit = async (data:Product) => {
        await createProduct(data);
        reset(); 
    };

    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            New product
          </Typography>
  
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

            <TextField label="Product id" 
            {...register("id")}
            error={!!errors.id}
            helperText={errors.id?.message}
            />

            <TextField label="Article number" 
            {...register("articleNumber")}
            error={!!errors.articleNumber}
            helperText={errors.articleNumber?.message}
            />

            <TextField label="Product title" 
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            />

            <TextField label="Price" 
            type="number"
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
            />

            <TextField label="Product description" 
            {...register("description")}
            multiline rows={3}
            error={!!errors.description}
            helperText={errors.description?.message}
            />

            <TextField label="Image" 
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image?.message}
            />
  
            <Button type="submit" variant="contained" color="primary">
              Add new product
            </Button>
          </Box>
        </Paper>
      </Container>
    );
}

  //useForm, kopplas med zodResolvern¨
  //OnSubmit för att hantera inlämningen av formuläret samt rensa det efter inlämning, reset
  //