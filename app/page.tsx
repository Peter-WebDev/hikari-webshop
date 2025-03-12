import { Container, Typography } from "@mui/material";
import HeroSection from "./components/hero/herosection";
import ProductList from "./components/products/product-list";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{ paddingBlock: "2rem", fontWeight: "300" }}
        >
          Products
        </Typography>
        <ProductList />
      </Container>
    </main>
  );
}
