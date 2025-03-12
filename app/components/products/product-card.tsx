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
  const titleSignColor: Record<string, string> = {
    砂: "#b6b47b",
    赤: "#ff0000",
    風: "#23d7ff",
    海岸: "#1d41ff",
    春: "#ff8900",
    森: "#62895c",
  };

  const titleSignColorForProduct = product.titleSign
    ? titleSignColor[product.titleSign] || "#3d3d3d"
    : "#3d3d3d"; // Standardfärg om titleSign saknas

  return (
    <Link href="#" sx={{ textDecoration: "none" }}>
      <Card data-cy="product">
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
                  color: titleSignColorForProduct,
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
