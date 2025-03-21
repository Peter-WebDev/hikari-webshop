import { Container, Typography } from "@mui/material";
import AboutHikariSection from "./components/about-hikari/about-hikari-section";
import HeroSection from "./components/hero/herosection";
import ProductList from "./components/products/product-list";

export default function Home() {
  return (
    <main>
      <HeroSection />
        <AboutHikariSection />
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            paddingBlock: { md: "2rem", sm: "2rem", xs: "1.5rem" },
            fontWeight: "300",
            fontSize: { sm: "3rem", xs: "2.5rem" },
          }}
        >
          Products
        </Typography>
        <ProductList />
      </Container>
    </main>
  );
}
