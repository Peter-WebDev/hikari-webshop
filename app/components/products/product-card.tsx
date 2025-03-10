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
export default function ProductCard() {
  return (
    <Link href="" sx={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="200" image="" alt="" />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
              {" "}
              Product title
            </Typography>
            <Link href="">
              <IconButton aria-label="add to cart">
                <LocalMallIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Link>
          </Box>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            Product price
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
