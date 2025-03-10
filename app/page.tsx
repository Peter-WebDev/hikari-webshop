import HeroSection from "./components/hero/herosection";
import { products } from "@/data";
import ProductList from "./components/products/product-list";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductList products={products} />
    </main>
  );
}
