"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation"; // Importera router
import { useState } from "react";

// Definiera typ för formData och errors
interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: number | null;
  city: string;
  country: string;
  email: string;
  phone: string;
}

interface Errors {
  [key: string]: boolean; // Dynamisk indexsignatur för fältnamn
}

const CheckoutForm = () => {
  const router = useRouter(); // Skapa router-instans

  // Sätt upp formData och errors med rätt typer
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    zipCode: null,
    city: "",
    country: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({
    firstName: false,
    lastName: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "zipCode" ? Number(value) : value,
    });

    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = () => {
    const newErrors: Errors = { ...errors };

    // Validera varje fält
    Object.keys(formData).forEach((field) => {
      if (formData.hasOwnProperty(field)) {
        const value = formData[field as keyof FormData];

        if (typeof value === "string") {
          if (value.trim() === "") {
            newErrors[field] = true;
          } else {
            newErrors[field] = false;
          }
        } else if (typeof value === "number") {
          if (value === null || isNaN(value)) {
            newErrors[field] = true;
          } else {
            newErrors[field] = false;
          }
        } else if (value === null) {
          newErrors[field] = true;
        }
      }
    });

    setErrors(newErrors);

    // Om inga fel finns, kan formuläret skickas
    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Formulär skickat:", formData);
      // Navigera till nästa sida, exempelvis /payment
      router.push("/confirmation[order-number]");
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
                  autoComplete: "given-name",
                },
                formHelperText: { "data-cy": "customer-name-error" } as any,
              }}
              label="First name *"
              variant="outlined"
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              helperText={errors.firstName ? "First name is required." : ""}
            />

            <TextField
              autoComplete="family-name"
              label="Last name *"
              variant="outlined"
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              helperText={errors.lastName ? "Last name is required." : ""}
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
              type="number"
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
              value={formData.zipCode ?? ""}
              onChange={handleChange}
              error={errors.zipCode}
              helperText={errors.zipCode ? "Zip code is required." : null}
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
              autoComplete="shipping"
              label="Country *"
              variant="outlined"
              fullWidth
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
              helperText={errors.country ? "Country is required." : ""}
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

            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              variant="contained"
              color="secondary"
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
