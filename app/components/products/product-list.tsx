import { db } from "@/prisma/db";
import { Box } from "@mui/material";
import ProductCard from "./product-card";

export default async function ProductList() {
  const products = await db.product.findMany();

  return (
    <Box
      sx={{
        paddingBottom: { sm: "5rem", xs: "3rem" },
        display: { xs: "flex", sm: "grid" },
        gridTemplateColumns: {
          md: "repeat(auto-fit, minmax(260px, 1fr))",
          sm: "repeat(auto-fit, minmax(245px, 1fr))",
        },
        gap: { md: 5, xs: 3 },
        justifyContent: { md: "center" },
        flexDirection: { xs: "row" },
        overflowX: { xs: "auto" },
        whiteSpace: { xs: "nowrap" },
      }}
    >
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{ minWidth: { xs: "250px", sm: "auto" }, flexShrink: "0" }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
}
