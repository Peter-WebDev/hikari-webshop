"use client";

import { useCart } from "@/app/providers/cart-provider";
import { Product } from "@/data";
import { Add, Remove } from "@mui/icons-material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function QuantityButton({ product }: { product: Product }) {
  const { cartItems, addToCartWithQuantity } = useCart();

  // Get the products quantity from cartItems else set it to 1
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <IconButton
          aria-label="remove"
          sx={{ padding: "0" }}
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          disabled={quantity === 1}
        >
          <Remove
            color="secondary"
            sx={{ fontSize: { sm: "2.2rem", xs: "2rem" } }}
          />
        </IconButton>
        <Typography
          component="span"
          width={45}
          border= "1px solid #000"
          borderRadius={1}
          textAlign= "center"
          sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}
        >
          {quantity}
        </Typography>
        <IconButton
          aria-label="add"
          sx={{ padding: "0" }}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Add
            color="secondary"
            sx={{ fontSize: { sm: "2.2rem", xs: "2rem" } }}
          />
        </IconButton>
      </Box>
      <Button
        data-cy="product-buy-button"
        color="secondary"
        variant="contained"
        endIcon={<LocalMallIcon />}
        sx={{
          fontSize: { sm: "1rem", xs: "0.9rem" },
        }}
        onClick={() => {
          addToCartWithQuantity({ ...product, quantity }, quantity);
          setQuantity(1); // Reset to 1 when items are added to cart
        }}
      >
        {quantity === 1 ? "Add to cart" : `Add ${quantity} items`}
      </Button>
    </Box>
  );
}
