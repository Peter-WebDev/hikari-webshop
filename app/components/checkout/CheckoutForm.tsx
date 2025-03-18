"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useCart } from "../../providers/cart-provider";

// Steg i checkout-processen
const steps = ["Shipping address", "Payment details", "Review your order"];

const CheckoutForm = () => {
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
          {/* Checkout-formulär */}
          <Typography variant="h6" sx={{ mt: 4 }}>
            Shipping address
          </Typography>

          <Box
            data-cy="customer-form"
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField
              data-cy="customer-name"
              label="First name *"
              variant="outlined"
              fullWidth
            />

            <TextField label="Last name *" variant="outlined" fullWidth />

            <TextField
              data-cy="customer-address"
              label="Address *"
              variant="outlined"
              fullWidth
            />

            <TextField
              data-cy="customer-zipcode"
              label="Zip code *"
              variant="outlined"
              fullWidth
            />

            <TextField
              data-cy="customer-city"
              label="City *"
              variant="outlined"
              fullWidth
            />

            <TextField label="Country *" variant="outlined" fullWidth />

            <TextField
              data-cy="customer-email"
              label="Email *"
              variant="outlined"
              fullWidth
            />

            <TextField
              data-cy="customer-phone"
              label="Phone *"
              variant="outlined"
              fullWidth
            />

            {/* Checkbox för betalningsadress */}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Use this address for payment details"
            />

            {/* Nästa-knapp */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </main>
  );
};

export default CheckoutForm;
