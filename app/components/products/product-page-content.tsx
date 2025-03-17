"use client";

import { useCart } from "@/app/providers/cart-provider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

export default async function ProductPage() {
  const { cartItems } = useCart();
  const { updateQuantity } = useCart();

  return (
    <main>
      <Container maxWidth="md" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}>
        {cartItems.map((item) => (
          <Box
            component="article"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "repeat(auto-fit, minmax(350px, 1fr))",
                sm: "repeat(auto-fit, minmax(315px, 1fr))",
                xs: "repeat(auto-fit, minmax(275px, 1fr))",
              },
              gap: { md: "3rem", sm: "2rem", xs: "1.5rem" },
            }}
            data-cy="product"
          >
            <Card
              sx={{
                border: "none",
                borderRadius: "0",
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia component="img" image={item.image} alt=""></CardMedia>
            </Card>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                component="h2"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box>
                  <Typography
                    component="span"
                    sx={{ fontSize: { md: "3rem", sm: "2.5rem", xs: "2rem" } }}
                    data-cy="product-title"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: item.titleSignColor || "#000",
                      marginLeft: "0.5rem",
                      fontSize: { md: "3rem", sm: "2rem", xs: "2rem" },
                    }}
                  >
                    {item.titleSign}
                  </Typography>
                </Box>
                <Typography
                  component="q"
                  sx={{ fontSize: { md: "2rem", sm: "1.7rem", xs: "1.5rem" } }}
                >
                  {item.titleDescription}
                </Typography>
              </Typography>
              <Typography component="p" data-cy="product-description">
                {item.description}
              </Typography>
              <Typography component="p">{item.slogan}</Typography>
              <Typography
                data-cy="product-price"
                component="span"
                sx={{ fontSize: { md: "1.5rem", xs: "1.3rem" } }}
              >
                Price:&nbsp;{item.price}&nbsp;SEK
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <IconButton
                    aria-label="remove"
                    sx={{ padding: "0" }}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <RemoveCircleOutlineIcon
                      color="secondary"
                      sx={{ fontSize: { sm: "2.2rem", xs: "2rem" } }}
                    />
                  </IconButton>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { md: "2rem", sm: "1.9rem", xs: "1.7rem" },
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    aria-label="add"
                    sx={{ padding: "0" }}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <AddCircleOutlineIcon
                      color="secondary"
                      sx={{ fontSize: { sm: "2.2rem", xs: "2rem" } }}
                    />
                  </IconButton>
                </Box>
                <Button
                  data-cy="product-buy-button"
                  color="secondary"
                  variant="contained"
                  endIcon={<LocalMallIcon />}
                  // size="large"
                  sx={{ py: "0.5rem", px: "1.5rem" }}
                >
                  Add to cart
                </Button>
              </Box>
              <Accordion
                sx={{
                  backgroundColor: "#C1B8AF",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel-content"
                  id="panel-header"
                  role="dialog"
                >
                  <Typography component="span">More information</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#D6CCC2" }}>
                  Brand: {item.brand}
                  <br />
                  Note: {item.note}
                  <br />
                  Weight: {item.weight}
                  <br />
                  Height: {item.height}
                  <br />
                  Diameter: {item.diameter}
                </AccordionDetails>
              </Accordion>
              <Typography component="p">
                Article number:{" "}
                <span data-cy="product-id">{item.articleNumber}</span>
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </main>
  );
}
