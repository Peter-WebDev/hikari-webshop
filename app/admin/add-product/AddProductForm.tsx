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
    price: z.float().min(3, "Price must be at least 3 numbers"),
    description: z.string().min(3, "Product description must be at least 3 characters"),
    image: z.string().min(3, "Product image must be at least 3 characters"),
});

export type Product = z.infer<typeof productSchema>;

export default function AddProductForm = () {
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

    }
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            New product
          </Typography>
  
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

            <TextField label="Product id" variant="outlined" fullWidth />
            <TextField label="Product name" variant="outlined" fullWidth />
            <TextField label="Price" variant="outlined" fullWidth />
            <TextField label="Product description" variant="outlined" multiline rows={3} fullWidth />
            <TextField label="Image URL" variant="outlined" fullWidth />
  
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Add new product
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  };
  

  //useForm, kopplas med zodResolvern¨
  //OnSubmit för att hantera inlämningen av formuläret samt rensa det efter inlämning, reset
  //