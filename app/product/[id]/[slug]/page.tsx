import QuantityButton from "@/app/components/quantity/quantityButton";
import { db } from "@/prisma/db";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Container,
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
    where: { articleNumber: id },
  });

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Container maxWidth="md" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}>
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
            <CardMedia component="img" image={product.image} alt=""></CardMedia>
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
                  {product.title}
                </Typography>
                <Typography
                  component="span"
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
                component="q"
                sx={{ fontSize: { md: "2rem", sm: "1.7rem", xs: "1.5rem" } }}
              >
                {product.titleDescription}
              </Typography>
            </Typography>
            <Typography component="p" data-cy="product-description">
              {product.description}
            </Typography>
            <Typography component="p">{product.slogan}</Typography>
            <Typography
              data-cy="product-price"
              component="span"
              sx={{ fontSize: { md: "1.5rem", xs: "1.3rem" } }}
            >
              Price:&nbsp;{product.price}&nbsp;SEK
            </Typography>
            <QuantityButton product={product} />
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
    </main>
  );
}
