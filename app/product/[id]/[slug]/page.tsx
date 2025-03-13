import { db } from "@/prisma/db";
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
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await db.product.findUnique({
    where: { id: id },
  });

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}>
      <Box
        component="article"
        sx={{
          display: "grid",
          gridTemplateColumns: {md: "repeat(auto-fit, minmax(350px, 1fr))", sm: "repeat(auto-fit, minmax(315px, 1fr))", xs: "repeat(auto-fit, minmax(275px, 1fr))"},
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
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/27372369/pexels-photo-27372369/free-photo-of-natur-hand-sommar-tradgard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          ></CardMedia>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography
            component="h2"
            sx={{ display: "flex", flexDirection: "column" }}
            data-cy="product-title"
          >
            <Box>
              <Typography
                component="span"
                variant="h3"
                sx={{ fontSize: { md: "3rem", sm: "2.5rem", xs: "2rem" } }}
              >
                {product.title}
              </Typography>
              <Typography
                component="span"
                variant="h3"
                sx={{
                  color: product.titleSignColor || "#000",
                  marginLeft: "0.5rem",
                  fontSize: { md: "3rem", sm: "2rem", xs: "2rem" },
                }}
              >
                {product.titleSign}
              </Typography>
            </Box>
            <Typography
              component="span"
              variant="h4"
              sx={{ fontSize: { md: "2rem", sm: "1.7rem", xs: "1.5rem" } }}
            >
              "The Essence of Spring"
            </Typography>
          </Typography>
          <Typography component="p" data-cy="product-description">
            {product.description}
          </Typography>
          <Typography component="p">{product.slogan}</Typography>
          <Typography
            component="span"
            variant="h5"
            sx={{ fontSize: { sm: "1.5rem", xs: "1.3rem" } }}
          >
            Price:&nbsp;{product.price}&nbsp;SEK
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
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <IconButton aria-label="remove" sx={{ padding: "0" }}>
                <RemoveCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
              <Typography component="span" variant="h4">
                1
              </Typography>
              <IconButton aria-label="add" sx={{ padding: "0" }}>
                <AddCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
            </Box>
            <Button
              data-cy="product-buy-button"
              color="secondary"
              variant="contained"
              size="large"
              endIcon={<LocalMallIcon />}
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
              Brand: {product.brand}
              <br />
              Note: {product.note}
              <br />
              Weight: {product.weight}
              <br />
              Height: {product.height}
              <br />
              Diameter: {product.diameter}
            </AccordionDetails>
          </Accordion>
          <Typography component="p">
            Article number:{" "}
            <span data-cy="product-id">{product.articleNumber}</span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
