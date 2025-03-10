import { Product } from "@/data";
import { Box } from "@mui/material";
import ProductCard from "./product-card";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <Box key={product.id}>
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
}
