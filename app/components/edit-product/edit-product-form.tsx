"use client";

import { deleteProduct, updateEditedProduct } from "@/app/actions";
import { productSchema } from "@/app/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, FormHelperText, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";



export type ProductForm = z.infer<typeof productSchema>;
export default function EditProductForm({ product }: { product: ProductForm & { id: string, articleNumber: string } }) {
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
    await updateEditedProduct(product.articleNumber, data);
    router.push("/admin")
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

        <Box component="form" data-cy="product-form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          <TextField
            slotProps={{
              htmlInput: {
                "data-cy": "product-title",
              },
            }}
            label="Product Name/title"
            type="text"
            data-cy="product-title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title ?
              <FormHelperText component="span" data-cy="product-title-error">
                {errors.title.message}
              </FormHelperText> : null
            }
          />

          <TextField
            slotProps={{
              htmlInput: {
                "data-cy": "product-price",
              },
            }}
            label="Price"
            type="number"
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price ?
              <FormHelperText component="span" data-cy="product-price-error">
                {errors.price.message}
              </FormHelperText> : null
            }
          />

          <TextField
            slotProps={{
              htmlInput: {
                "data-cy": "product-description",
              },
            }}
            label="Product description"
            type="text"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description ?
              <FormHelperText component="span" data-cy="product-description-error">
                {errors.description.message}
              </FormHelperText> : null
            }
          />


          <TextField
            slotProps={{
              htmlInput: {
                "data-cy": "product-image",
              },
            }}
            label="Image URL"
            type="text"
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image ?
              <FormHelperText component="span" data-cy="product-image-error">
                {errors.image.message}
              </FormHelperText> : null
            }
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