import { db } from "@/prisma/db";
import { Box } from "@mui/material";
import ProductCard from "./product-card";

export default async function ProductList() {
  const products = await db.product.findMany();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
        gap: 5,
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
