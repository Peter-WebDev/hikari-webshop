"use client";

import { useCart } from "@/app/providers/cart-provider";
import { useSnackbar } from "@/app/providers/snackbar-provider";
import ThemeImage from "@/app/components/theme-image";
import { Product } from "@/data";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {
  Box,
  CardContent,
  IconButton,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { showSnackbar } = useSnackbar();

  return (
    <Link
      href={`/product/${product.articleNumber}/${product.titleWithDescription
        ?.toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .trim()
        .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize first letter
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        }`}
      sx={{ textDecoration: "none" }}
    >
      <Card
        data-cy="product"
        sx={{
          boxShadow: 3,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <ThemeImage
          light={product.image}
          dark={product.imageDark}
          sx={{
            width: {
              xs: "70%",
              sm: "80%",
              md: "100%",
            },
            height: "auto",
            objectFit: "contain",
            margin: "0 auto",
            display: "block",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                data-cy="product-title"
                component="h3"
                sx={{
                  fontSize: { md: "1.8rem", xs: "1.5rem" },
                  fontWeight: "400",
                }}
              >
                {product.title}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  paddingLeft: "0.5rem",
                  fontSize: { md: "1.8rem", xs: "1.5rem" },
                  fontWeight: "400",
                  color: product.titleSignColor || "text.primary",
                }}
              >
                {product.titleSign}
              </Typography>
            </Box>
            <IconButton
              data-cy="product-buy-button"
              aria-label="add to cart"
              onClick={(e) => {
                e.preventDefault();
                addToCart({ ...product, quantity: 1 });
                showSnackbar(
                  `${product.title} ${product.titleSign} has been added to cart`,
                  Slide
                );
              }}
            >
              <LocalMallIcon
                sx={{
                  fontSize: { md: "2rem", xs: "1.8rem" },
                  color: "secondary.main",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: { md: "1.3rem", xs: "1.2rem" },
              fontWeight: "350",
            }}
          >
            {product.titleDescription}
          </Typography>
          <Typography
            data-cy="product-price"
            component="p"
            sx={{
              fontSize: { xs: "1rem" },
              paddingTop: "0.5rem",
            }}
          >
            {product.price}&nbsp;SEK
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
