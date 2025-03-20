"use client";

import { createOrder } from "@/app/actions";
import { useCart } from "@/app/providers/cart-provider";
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
import { useRouter } from "next/navigation"; // Importera router
import { useState } from "react";

const CheckoutForm = () => {
  const router = useRouter(); // Skapa router-instans
  const { cartItems, clearCart } = useCart();

  // // Definiera typ för formData och errors
  interface FormData {
    name: string;
    address: string;
    zipCode: string;
    city: string;
    email: string;
    phone: string;
  }

  interface Errors {
    [key: string]: boolean; // Dynamisk indexsignatur för fältnamn
  }
  // Sätt upp formData och errors med rätt typer
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    zipCode: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: false,
    address: false,
    zipCode: false,
    city: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validera formuläret
    const newErrors: Errors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof FormData].trim()) {
        newErrors[field] = true;
      }
    });

    // Check zipcode
    if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = true;
    }

    // Check email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }

    // Check phone
    if (!/^\d{10}$|^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = true;
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Convert zipcode to number
    const formattedData = {
      ...formData,
      zipCode: Number(formData.zipCode.split(" ").join("")),
    };

    // Create order
    const response = await createOrder(formattedData, cartItems);

    if (response && response.success) {
      localStorage.setItem("customerInfo", JSON.stringify(formattedData));
      clearCart();
      router.push(`/confirmation/${response.orderNumber}`);
    } else {
      alert("Something went wrong while placing your order.");
    }
  };

  return (
    <main>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ padding: 3, mt: 6, mb: 6, backgroundColor: "#f7f7f7" }}
        >
          <Typography variant="h6" sx={{ mt: 4 }}>
            Shipping address
          </Typography>

          <Box
            data-cy="customer-form"
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField
              slotProps={{
                htmlInput: {
                  "data-cy": "customer-name",
                  autoComplete: "name",
                },
                formHelperText: { "data-cy": "customer-name-error" } as any,
              }}
              label="Fullname *"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? "Full name is required." : ""}
            />

            <TextField
              slotProps={{
                htmlInput: {
                  "data-cy": "customer-address",
                  autoComplete: "street-address",
                },
                formHelperText: { "data-cy": "customer-address-error" } as any,
              }}
              label="Address *"
              variant="outlined"
              fullWidth
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              helperText={errors.address ? "Address is required." : ""}
            />

            <TextField
              slotProps={{
                htmlInput: {
                  "data-cy": "customer-zipcode",
                  autoComplete: "postal-code",
                },
                formHelperText: { "data-cy": "customer-zipcode-error" } as any,
              }}
              label="Zip code *"
              variant="outlined"
              fullWidth
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
              helperText={errors.zipCode ? "Zip code is required." : ""}
            />

            <TextField
              slotProps={{
                htmlInput: {
                  "data-cy": "customer-city",
                  autoComplete: "address-level2",
                },
                formHelperText: { "data-cy": "customer-city-error" } as any,
              }}
              label="City *"
              variant="outlined"
              fullWidth
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              helperText={errors.city ? "City is required." : ""}
            />

            <TextField
              slotProps={{
                htmlInput: {
                  "data-cy": "customer-email",
                  autoComplete: "email",
                },
                formHelperText: { "data-cy": "customer-email-error" } as any,
              }}
              label="Email *"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? "Email is required." : ""}
            />

            <TextField
              slotProps={{
                htmlInput: { "data-cy": "customer-phone", autoComplete: "tel" },
                formHelperText: { "data-cy": "customer-phone-error" } as any,
              }}
              label="Phone *"
              variant="outlined"
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              helperText={errors.phone ? "Phone is required." : ""}
            />

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Use this address for payment details"
            />

            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Place order
            </Button>
          </Box>
        </Paper>
      </Container>
    </main>
  );
};

export default CheckoutForm;
