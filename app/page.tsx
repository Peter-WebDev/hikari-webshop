import { products } from "@/data";
import { Typography } from "@mui/material";
import HeroSection from "./components/hero/herosection";
import ProductList from "./components/products/product-list";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Typography
        component="h2"
        variant="h2"
        sx={{ textAlign: "center", padding: "2rem" }}
      >
        Products
      </Typography>
      <ProductList products={products} />
    </main>
  );
}
