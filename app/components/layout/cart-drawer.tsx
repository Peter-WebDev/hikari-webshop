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
  const { totalPrice } = useCart();

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
                  <TableCell>
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
                  <TableCell>
                    <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                      {item.title}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <IconButton aria-label="remove" sx={{ padding: "0" }}>
                      <RemoveCircleOutlineIcon
                        fontSize="small"
                        color="secondary"
                      />
                    </IconButton>
                    <Typography component="span" fontSize="small">
                      1
                    </Typography>
                    <IconButton aria-label="add">
                      <AddCircleOutlineIcon
                        fontSize="small"
                        color="secondary"
                      />
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
        <Box
          sx={{ borderTop: "1px solid #ddd", paddingTop: 2, textAlign: "left" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingBottom: 1 }}>
          <Typography variant="body1">
            <strong>Subtotal:</strong>
          </Typography>
          <Typography variant="body1">
            {totalPrice}:-
          </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">
            <strong>Shipping fee:</strong>
          </Typography>
          <Typography variant="body1">
            {shippingFee}:-
          </Typography>
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
