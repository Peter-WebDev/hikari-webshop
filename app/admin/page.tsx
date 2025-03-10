import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function AdminPage() {
  // Tillfällig data för produkter
  const products = [
    { id: 1, name: "Produkt 1", image: "/product1.jpg" },
    { id: 2, name: "Produkt 2", image: "/product2.jpg" },
    { id: 3, name: "Produkt 3", image: "/product3.jpg" },
  ];

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
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add new product
        </Button>
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
                    alt={product.name}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
