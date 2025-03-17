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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default async function AdminPage() {
  const products = await db.product.findMany();

  return (
    <main>
      <Box
        sx={{ maxWidth: "900px", margin: "auto", padding: { md: 8, xs: 4 } }}
      >
        {/* Rubrik och Lägg till-knapp */}
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

        <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}>
                  Article number
                </TableCell>
                <TableCell sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}>
                  Image
                </TableCell>
                <TableCell sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}>
                  Product name
                </TableCell>
                <TableCell sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}>
                  Price
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: { sm: "1.3rem", xs: "1.1rem" } }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} data-cy="product">
                  <TableCell
                    sx={{ fontSize: { sm: "1.1rem", xs: "1rem" } }}
                    data-cy="product-id"
                  >
                    {product.id}
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: { sm: "1.1rem", xs: "1rem" } }}
                    data-cy="product-title"
                  >
                    {product.title}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: { sm: "1.1rem", xs: "1rem" } }}
                    data-cy="product-price"
                  >
                    {product.price}
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      data-cy="admin-edit-product"
                      href={`/admin/edit-product/${product.id}`}
                    >
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <Link data-cy="admin-remove-product">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </main>
  );
}
