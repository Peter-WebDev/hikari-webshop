import { db } from "@/prisma/db";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Typography
} from "@mui/material";

export default async function AdminPage() {
  const products = await db.product.findMany({
    select: {
      id: true,
      articleNumber: true,
      image: true,
      title: true,
      price: true,
    },
    orderBy: {
      id: "asc",
    }
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
          <Link data-cy="admin-add-product" href="/admin/add-product">
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
              borderBottom: "2px solid #ccc",
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
                borderBottom: "1px solid #ccc",
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
              <Typography data-cy="product-id">{product.id}</Typography>
              <Typography data-cy="product-title">{product.title}</Typography>
              <Typography data-cy="product-price">
                {product.price} SEK
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Link
                  data-cy="admin-edit-product"
                  href={`/admin/edit-product/${product.id}`}
                >
                  <IconButton color="secondary">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton color="error" data-cy="admin-remove-product">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}
