"use client";

import { useCart } from "@/app/providers/cart-provider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  products: Product[];
  handleCheckoutClick: () => void;
}

const Sidebar = ({
  openSidebar,
  toggleSidebar,
  products,
  handleCheckoutClick,
}: SidebarProps) => {
  const { cartItems } = useCart();

  return (
    <Drawer anchor="right" open={openSidebar} onClose={toggleSidebar}>
      <Box sx={{ width: 350, padding: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Chosen products:
        </Typography>

        {/* Table container with products in cart */}
        <TableContainer component={Paper} sx={{ boxShadow: 2, marginBottom: 2 }}>
          <Table>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.image}
                      // alt={item.title}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.title}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      paddingTop: "20px"
                    }}
                  >
                    <IconButton aria-label="remove" sx={{ padding: "0" }}>
                      <RemoveCircleOutlineIcon fontSize="small" color="secondary" />
                    </IconButton>
                    <Typography component="span" fontSize="small">
                      1
                    </Typography>
                    <IconButton aria-label="add">
                      <AddCircleOutlineIcon fontSize="small" color="secondary" />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold">
                      {item.price} SEK
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Subtotal, shipping, and total */}
        <Box sx={{ borderTop: "1px solid #ddd", paddingTop: 2, textAlign: "left" }}>
          <Typography variant="body1">
            <strong>Subtotal:</strong> 1580:-
          </Typography>
          <Typography variant="body1">
            <strong>Shipping fee:</strong> 0:-
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
            Total: 1580:-
          </Typography>
        </Box>

        {/* Checkout button */}
        <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 2 }}>
          <Link data-cy="cart-link" href={"/checkout"}>
            <ListItem>
              <Button variant="contained" onClick={handleCheckoutClick}>
                CHECK OUT
              </Button>
            </ListItem>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;