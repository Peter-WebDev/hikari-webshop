import { db } from "@/prisma/db";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Typography
} from "@mui/material";
import DeleteProductButton from "../components/product-actions/delete-product-button";

export default async function AdminPage() {
  const products = await db.product.findMany({
    select: {
      id: true,
      image: true,
      articleNumber: true,
      title: true,
      price: true,
    },
  });

  return (
    <main>
      <Box
        sx={{ maxWidth: "900px", margin: "auto", padding: { md: 4, xs: 4 } }}
      >
        {/* Header and Add button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography component="h2" variant="h4" fontWeight="bold">
            Admin
          </Typography>
          <Link data-cy="admin-add-product" href="/admin/product/new">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
            >
              Add product
            </Button>
          </Link>
        </Box>

        <Box component={Paper} sx={{ boxShadow: 2, padding: 2 }}>
          {/* Header-raden */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr",
              fontWeight: "bold",
              paddingBottom: 2,
              borderBottom: "2px solid",
              borderColor: "divider",
            }}
          >
            <Typography>Image</Typography>
            <Typography>Article number</Typography>
            <Typography>Product name</Typography>
            <Typography>Price</Typography>
            <Typography align="right">Actions</Typography>
          </Box>

          {/* Produkt-rader */}
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr",
                alignItems: "center",
                paddingY: 2,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
              data-cy="product"
            >
              <Box>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              </Box>
              <Typography data-cy="product-id">
                {product.articleNumber}
              </Typography>
              <Typography data-cy="product-title">{product.title}</Typography>
              <Typography data-cy="product-price">
                {product.price} SEK
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Link
                  data-cy="admin-edit-product"
                  href={`/admin/product/${product.articleNumber}`}
                >
                  <IconButton color="secondary">
                    <EditIcon />
                  </IconButton>
                </Link>
                {/* Replaced delete button with a client component */}
                <DeleteProductButton productId={product.id} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}
