"use client";

import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useCart } from "../../providers/cart-provider";

// Steg i checkout-processen
const steps = ["Shipping address", "Payment details", "Review your order"];

const CheckoutProduct = () => {
  const { cartItems, updateQuantity, totalPrice, removeFromCart } = useCart();
  const shippingFee = 0; // Can be changed
  const totalWithShipping = totalPrice + shippingFee; // Total price is the subtotal

  return (
    <main>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ padding: 3, mt: 6, backgroundColor: "#f7f7f7" }}
        >
          {/* Checkout-rubriken */}
          <Typography variant="h4" fontWeight="bold" gutterBottom mb="1.5rem">
            Checkout
          </Typography>

          {cartItems.map((item) => (
            <Box
              data-cy="cart-item"
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                paddingBottom: 2,
                paddingRight: 2,
                mb: 2,
              }}
            >
              {/* Produktbild */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: 50, height: 50, mr: 2 }}
              />

              {/* Produktnamn, OBS ska data-cyn vara placerad här??? */}
              <Typography
                variant="body1"
                sx={{ flexGrow: 1 }}
                data-cy="product-title"
              >
                {item.title}
              </Typography>

              {/* Justering av antal items */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  data-cy="decrease-quantity-button"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Remove />
                </IconButton>
                <Typography
                  data-cy="product-quantity"
                  component="span"
                  sx={{
                    width: 40,
                    textAlign: "center",
                    display: "inline-block",
                    border: "1px solid #6e6e6e",
                    borderRadius: "0.2rem",
                  }}
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  data-cy="increase-quantity-button"
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Add />
                </IconButton>
              </Box>

              {/* Trashbin-knapp-ikon */}
              <IconButton
                size="small"
                sx={{ color: "#6e6e6e" }}
                onClick={() => removeFromCart(item.id)}
              >
                <Delete />
              </IconButton>

              {/* Pris */}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", ml: 2 }}
                data-cy="product-price"
              >
                {item.price * item.quantity}:-
              </Typography>
            </Box>
          ))}

          {/* Subtotal, Shipping fee och Total-sammanställning */}
          <Box
            sx={{
              pt: 2,
              textAlign: "right",
              paddingRight: 2,
            }}
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
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: 1 }}
              >
                Total:
              </Typography>
              <Typography
                data-cy="total-price"
                variant="h6"
                sx={{ marginTop: 1 }}
              >
                {totalWithShipping} SEK
              </Typography>
            </Box>
          </Box>

          {/* Stegvis checkout-navigation 1-2-3 */}
          <Box sx={{ mt: 2, borderTop: "1px solid #ddd", pt: 4 }}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label} </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Paper>
      </Container>
    </main>
  );
};

export default CheckoutProduct;
