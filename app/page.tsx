import { products } from "@/data";
import ProductList from "./components/products/product-list";

export default function Home() {
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
