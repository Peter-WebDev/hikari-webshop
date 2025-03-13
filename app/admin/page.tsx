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
    <Box sx={{ maxWidth: "800px", margin: "auto", padding: 3 }}>
      {/* Rubrik och Lägg till-knapp */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Admin Panel
        </Typography>
        <Link data-cy="admin-add-product" href="/admin/add-product">
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add new product
          </Button>
        </Link>
      </Box>

      {/* Tillfällig Tabell för produkter */}
      <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
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
                <TableCell>{product.title}</TableCell>
                <TableCell align="right">
                  <Link
                    data-cy="admin-edit-product"
                    href={`/admin/edit-product/${product.id}`}
                  >
                    <IconButton color="primary">
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
  );
}
