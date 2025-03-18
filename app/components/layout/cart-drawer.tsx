"use client";

import { useCart } from "@/app/providers/cart-provider";
import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  handleCheckoutClick: () => void;
}

const Sidebar = ({
  openSidebar,
  toggleSidebar,
  handleCheckoutClick,
}: SidebarProps) => {
  const { cartItems } = useCart();
  const { totalPrice } = useCart();
  const { updateQuantity } = useCart();

  const shippingFee = 0; // Can be changed
  const totalWithShipping = totalPrice + shippingFee; // Total price is the subtotal

  return (
    <Drawer anchor="right" open={openSidebar} onClose={toggleSidebar}>
      <Box sx={{ width: 350, padding: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Your cart
        </Typography>

        <Box
          component={Paper}
          sx={{
            boxShadow: 2,
            marginBottom: 3,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                padding: "1rem",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                <Typography variant="body2" fontSize="medium">
                  {item.title}
                </Typography>
              </Box>

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
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Remove fontSize="medium" color="secondary" />
                </IconButton>
                <Typography
                  component="span"
                  fontSize="medium"
                  width={30}
                  border="1px solid #000"
                  borderRadius={1}
                  textAlign="center"
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  aria-label="add"
                  sx={{ padding: "0" }}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Add fontSize="medium" color="secondary" />
                </IconButton>
              </Box>

              <Typography
                variant="body2"
                fontWeight="bold"
                fontSize="medium"
                textAlign="right"
              >
                {item.price * item.quantity}:-
              </Typography>
            </Box>
          ))}
        </Box>

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
          <Button
            style={{ paddingTop: "1rem", textDecoration: "none" }}
            data-cy="cart-link"
            variant="contained"
            color="secondary"
            onClick={handleCheckoutClick}
          >
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
