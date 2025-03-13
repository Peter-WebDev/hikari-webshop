import { Product } from "@/data";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.articleNumber}/${product.titleWithDescription
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .trim()
      .replace(/^\w/, c => c.toUpperCase()) // Capitalize first letter
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      }`}
      sx={{ textDecoration: "none" }}>
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
        <CardMedia component="img" height="200" image={product.image} alt="" />
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
                  fontSize: { md: "1.8rem", sm: "1.5rem", xs: "1.3rem" },
                  fontWeight: "600",
                }}
              >
                {product.title}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  paddingLeft: "0.5rem",
                  fontSize: { md: "1.8rem", sm: "1.5rem", xs: "1.3rem" },
                  fontWeight: "600",
                  color: product.titleSignColor || "#000",
                }}
              >
                {product.titleSign}
              </Typography>
            </Box>
            {/* Add onClick to add product to cart */}
            <IconButton data-cy="product-buy-button" aria-label="add to cart">
              <LocalMallIcon
                sx={{
                  fontSize: { md: "2rem", sm: "1.6rem", xs: "1.4rem" },
                  color: "#040404",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: { md: "1.3rem", sm: "1.2rem", xs: "1rem" },
              fontWeight: "500",
            }}
          >
            {product.titleDescription}
          </Typography>
          <Typography
            data-cy="product-price"
            component="p"
            sx={{
              fontSize: { sm: "1rem", xs: "0.9rem" },
              paddingTop: "0.5rem",
            }}
          >
            {product.price} SEK
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
