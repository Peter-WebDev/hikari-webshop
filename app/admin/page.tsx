import { deleteProduct } from "@/app/actions";
import { db } from "@/prisma/db";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  Link,
  Paper,
  Typography,
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

        <Paper sx={{ boxShadow: 2, p: 2 }}>
          {/* Header Row (Hidden on small screens) */}
          <Grid2 container={true} spacing={0} sx={{
            fontWeight: "bold",
            display: { xs: "none", md: "flex" },
            mb: 1,
            px: 0
          }}>
            <Grid2 flex={1}>Article number</Grid2>
            <Grid2 flex={1}>Image</Grid2>
            <Grid2 flex={1}>Product name</Grid2>
            <Grid2 flex={1}>Price</Grid2>
            <Grid2 sx={{ textAlign: "right" }}>Actions</Grid2>
          </Grid2>

          <Divider sx={{ display: { xs: "none", md: "block" }, mb: 2 }} />

          {/* Product Rows */}
          {products.map((product) => (
            <Box key={product.id} data-cy="product" sx={{ mb: 2 }}>
              <Grid2 container spacing={2} alignItems="center" sx={{
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' }
              }}>
                {/* Article Number */}
                <Grid2 columns={{ xs: 12, md: 5 }} flex={1}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "space-between", md: "flex-start" } }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        mr: 1,
                        minWidth: '80px', // För att förhindra att texten hoppar runt
                        display: { md: "none" }
                      }}
                    >
                      Article number:
                    </Typography>
                    <Typography component="span" data-cy="product-id" >
                      {product.articleNumber}
                    </Typography>
                  </Box>
                </Grid2>

                {/* Image */}
                <Grid2 flex={1}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", sm: 'center', md: "flex-start" } }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        mr: 1,
                        minWidth: '80px',
                        display: { md: "none" }
                      }}
                    >
                      Image:
                    </Typography>
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
                </Grid2>

                {/* Product Name */}
                <Grid2 flex={1}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", md: "flex-start" } }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        mr: 1,
                        minWidth: '100px',
                        display: { md: "none" }
                      }}
                    >
                      Product name:
                    </Typography>
                    <Typography component="span" data-cy="product-title">
                      {product.title}
                    </Typography>
                  </Box>
                </Grid2>

                {/* Price */}
                <Grid2 flex={1}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", sm: 'flex-end', md: "flex-start" } }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        mr: 1,
                        minWidth: '60px',
                        display: { md: "none" }
                      }}
                    >
                      Price:
                    </Typography>
                    <Typography component="span" data-cy="product-price">
                      {product.price.toFixed(2)}
                    </Typography>
                  </Box>
                </Grid2>

                {/* Actions */}
                <Grid2 sx={{
                  textAlign: { xs: "left", md: "right" },
                  mt: { xs: 1, md: 0 }
                }}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                    gap: 1
                  }}>
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        mr: 1,
                        minWidth: '70px',
                        display: { md: "none" }
                      }}
                    >
                      Actions:
                    </Typography>
                    <Link
                      data-cy="admin-edit-product"
                      href={`/admin/edit-product/${product.id}`}
                    >
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <form
                      action={async () => {
                        'use server';
                        if (confirm("Are you sure you want to delete this product?")) {
                          await deleteProduct(product.id);
                        }
                      }}
                      style={{ display: 'inline' }}
                    >
                      <IconButton
                        type="submit"
                        color="error"
                        data-cy="admin-remove-product"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </form>
                  </Box>
                </Grid2>
              </Grid2>
              <Divider sx={{ mt: 2, mb: 2 }} />
            </Box>
          ))}
        </Paper>
      </Box>
    </main>
  );
}
