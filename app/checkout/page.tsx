"use client";

import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

// Steg i checkout-processen
const steps = ["Shipping address", "Payment details", "Review your order"];

// TEST-varukorgsdata, här ska vi lägga in db datan sen
const cartItems = [
  {
    id: 1,
    name: "Productname",
    price: 790,
    quantity: 1,
    image: "/assets/herovideos/display-images/Aka - Display.png",
  },
  {
    id: 2,
    name: "Productname",
    price: 790,
    quantity: 1,
    image: "/assets/herovideos/display-images/Haru - Display.png",
  },
];

const CheckoutForm = () => {
  return (
    <main>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}
        >
          {/* Checkout-rubriken */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Checkout
          </Typography>

          {cartItems.map((item) => (
            <Box
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
                alt={item.name}
                sx={{ width: 50, height: 50, mr: 2 }}
              />

              {/* Produktnamn, OBS ska data-cyn vara placerad här??? */}
              <Typography
                data-cy="cart-item"
                variant="body1"
                sx={{ flexGrow: 1 }}
              >
                {item.name}
              </Typography>

              {/* Justering av antal items */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton size="small">
                  <Remove />
                </IconButton>
                <TextField
                  value={item.quantity}
                  variant="outlined"
                  size="small"
                  sx={{ width: 40, textAlign: "center" }}
                />
                <IconButton size="small">
                  <Add />
                </IconButton>
              </Box>

              {/* Trashbin-knapp-ikon */}
              <IconButton size="small" color="primary">
                <Delete />
              </IconButton>

              {/* Pris */}
              <Typography variant="body1" sx={{ fontWeight: "bold", ml: 2 }}>
                {item.price}:-
              </Typography>
            </Box>
          ))}

          {/* Subtotal, Shipping fee och Total-sammanställning */}
          <Box
            sx={{
              mt: 2,
              borderTop: "1px solid #ddd",
              pt: 2,
              textAlign: "right",
              paddingRight: 2,
            }}
          >
            <Typography variant="body1">
              <strong>Subtotal:</strong> 1580:-
            </Typography>
            <Typography variant="body1">
              <strong>Shipping fee:</strong> 0:-
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
              Total: 1580:-
            </Typography>
          </Box>

          {/* Stegvis checkout-navigation 1-2-3 */}
          <Box sx={{ mt: 2, borderTop: "1px solid #ddd", pt: 2 }}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

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
