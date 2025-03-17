"use client";

import { useCart } from "@/app/providers/cart-provider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
}

const Sidebar = ({ openSidebar, toggleSidebar }: SidebarProps) => {
  const { cartItems } = useCart();
  const { totalPrice } = useCart();
  const { updateQuantity } = useCart();

  const shippingFee = 0; // Can be changed
  const totalWithShipping = totalPrice + shippingFee; // Total price is the subtotal

  return (
    <Drawer anchor="right" open={openSidebar} onClose={toggleSidebar}>
      <Box sx={{ width: 350, padding: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Chosen products:
        </Typography>

        {/* Table container with products in cart */}
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 2, marginBottom: 3 }}
        >
          <Table>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ padding: "1.5rem 0.5rem" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "1.5rem 0.5rem" }}>
                    <Typography variant="body2" fontSize="medium">
                      {item.title}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ padding: "1.5rem 0.5rem" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        aria-label="remove"
                        sx={{ padding: "0" }}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <RemoveCircleOutlineIcon
                          fontSize="medium"
                          color="secondary"
                        />
                      </IconButton>
                      <Typography component="span" fontSize="medium">
                        {item.quantity}
                      </Typography>
                      <IconButton
                        aria-label="add"
                        sx={{ padding: "0" }}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <AddCircleOutlineIcon
                          fontSize="medium"
                          color="secondary"
                        />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "1.5rem 0.5rem" }}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      fontSize="medium"
                      textAlign="right"
                    >
                      {item.price * item.quantity}:-
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Subtotal, shipping, and total */}
        <Box
          sx={{ borderTop: "1px solid #ddd", paddingTop: 2, textAlign: "left" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 1,
            }}
          >
            <Typography variant="body1">
              <strong>Subtotal:</strong>
            </Typography>
            <Typography variant="body1">{totalPrice}:-</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1">
              <strong>Shipping fee:</strong>
            </Typography>
            <Typography variant="body1">{shippingFee}:-</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
              Total:
            </Typography>
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              {totalWithShipping} SEK
            </Typography>
          </Box>
        </Box>

        {/* Checkout button */}
        <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 2 }}>
          <Link
            data-cy="cart-link"
            href={"/checkout"}
            style={{ paddingTop: "1rem", textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              CHECKOUT
            </Button>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
