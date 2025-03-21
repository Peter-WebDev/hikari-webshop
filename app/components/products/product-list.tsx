import { db } from "@/prisma/db";
import { Box } from "@mui/material";
import ProductCard from "./product-card";

export default async function ProductList() {
  const products = await db.product.findMany();

  return (
    <Box
      sx={{
        paddingBottom: { sm: "5rem", xs: "3rem" },
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(auto-fit, minmax(260px, 1fr))",
          sm: "repeat(auto-fit, minmax(245px, 1fr))",
        },
        gap: 5,
        justifyContent: { md: "center" },
      }}
    >
      {products.map((product) => (
        <Box
          key={product.articleNumber}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
}
