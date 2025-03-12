import { db } from '@/prisma/db';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardMedia, Container, IconButton, Typography } from "@mui/material";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await db.product.findUnique({
    where: { id: id }
  });

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box
        component="article"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "3rem",
        }}
        data-cy="product"
      >
        <Card sx={{ border: "none", borderRadius: "0", objectFit: "cover", objectPosition: "center", backgroundColor: "transparent", boxShadow: "none" }}>
          <CardMedia component="img" image="https://picsum.photos/id/16/500" alt="">
          </CardMedia>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography component="h2" sx={{ display: "flex", flexDirection: "column" }} data-cy="product-title">
            <Typography component="span" variant="h3">Haru 春</Typography>
            <Typography component="span" variant="h4">"The Essence of Spring"</Typography>
          </Typography>
          <Typography component="p" data-cy="product-description">Fresh, floral, and full of life, Haru captures the awakening of springtime. The scent of dewy grass, wildflowers in bloom, and delicate morning mist creates a light and uplifting atmosphere.</Typography>
          <Typography component="div" variant="h5">
            Price:&nbsp;
            <Typography component="span" variant="h5" data-cy="product-price">
              790
            </Typography>
            &nbsp;SEK
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <IconButton aria-label="remove" sx={{ padding: "0" }}>
                <RemoveCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
              <Typography component="span" variant="h4">1</Typography>
              <IconButton aria-label="add">
                <AddCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
            </Box>
            <Button data-cy="product-buy-button" color="secondary" variant="contained" size="large" endIcon={<LocalMallIcon />}>Add to cart</Button>
          </Box>
          <Accordion sx={{ backgroundColor: "#C1B8AF", border: "none", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
              role="dialog"
            >
              <Typography component="span">More information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Details:<br />Top/Middle/Base note: Pine/Moss/Sandalwood<br />
              Height & diameter: 10.7 cm & 8 cm
            </AccordionDetails>
          </Accordion>
          <Typography component="p">Article number: <span data-cy="product-id">100687983</span></Typography>
        </Box>
      </Box>
    </Container>
  )
}
