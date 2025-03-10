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
    <Link href="#" sx={{ textDecoration: "none" }}>
      <Card>
        <CardMedia component="img" height="200" image="" alt="" />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography component="h3" sx={{ fontSize: "1.8rem", fontWeight: "600" }}>
              {product.title}
            </Typography>
            <Link href="#">
              <IconButton aria-label="add to cart">
                <LocalMallIcon sx={{ fontSize: "2rem", color: "#040404" }} />
              </IconButton>
            </Link>
          </Box>
            <Typography component="p" sx={{ fontSize: "1rem" }}>
              {product.price} SEK
            </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
