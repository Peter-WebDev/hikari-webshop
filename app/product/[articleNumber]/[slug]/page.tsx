import ProductHeroVideo from "@/app/components/hero/product-hero-video";
import QuantityButton from "@/app/components/quantity/quantityButton";
import ThemeImage from "@/app/components/theme-image";
import { db } from "@/prisma/db";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Typography,
} from "@mui/material";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ articleNumber: string }>;
}) {
  const { articleNumber } = await params;
  const product = await db.product.findUnique({
    where: { articleNumber: articleNumber },
  });

  console.log("Found product:", product);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductHeroVideo videoName={product.title} />
      <Container maxWidth="md" sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 25 }}>
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
          <ThemeImage
            light={product.imageProduct ?? product.image}
            dark={product.imageProductDark ?? product.imageDark}
          />
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
                    color: product.titleSignColor || "text.primary",
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
                backgroundColor: "primary.dark",
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
              <AccordionDetails sx={{ backgroundColor: "primary.light" }}>
                <Box
                  component="dl"
                  sx={{
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    columnGap: "0.75rem",
                    rowGap: "0.25rem",
                  }}
                >
                  <Typography component="dt" sx={{ fontWeight: "bold" }}>
                    Brand
                  </Typography>
                  <Typography component="dd" sx={{ margin: 0 }}>
                    {product.brand}
                  </Typography>

                  <Typography component="dt" sx={{ fontWeight: "bold" }}>
                    Note
                  </Typography>
                  <Typography component="dd" sx={{ margin: 0 }}>
                    {product.note}
                  </Typography>

                  <Typography component="dt" sx={{ fontWeight: "bold" }}>
                    Weight
                  </Typography>
                  <Typography component="dd" sx={{ margin: 0 }}>
                    {product.weight}
                  </Typography>

                  <Typography component="dt" sx={{ fontWeight: "bold" }}>
                    Height
                  </Typography>
                  <Typography component="dd" sx={{ margin: 0 }}>
                    {product.height}
                  </Typography>

                  <Typography component="dt" sx={{ fontWeight: "bold" }}>
                    Diameter
                  </Typography>
                  <Typography component="dd" sx={{ margin: 0 }}>
                    {product.diameter}
                  </Typography>
                </Box>
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
