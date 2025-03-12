import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, Button, Card, CardMedia, Container, IconButton, Typography } from "@mui/material";

export default async function ProductPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box
        component="article"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "3rem",
        }}
      >
        <Card sx={{ border: "none", borderRadius: "0", objectFit: "cover", objectPosition: "center" }}>
          <CardMedia component="img" image="https://picsum.photos/id/16/500" alt="">
          </CardMedia>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography component="h2" sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="span" variant="h3">Haru 春</Typography>
            <Typography component="span" variant="h4">"The Essence of Spring"</Typography>
          </Typography>
          <Typography component="p">Fresh, floral, and full of life, Haru captures the awakening of springtime. The scent of dewy grass, wildflowers in bloom, and delicate morning mist creates a light and uplifting atmosphere.</Typography>
          <Typography component="div" variant="h5">
            Price:&nbsp;
            <Typography component="span" variant="h5">
              790
            </Typography>
            &nbsp;SEK
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <IconButton aria-label="remove">
                <RemoveCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
              <Typography component="span" variant="h4">1</Typography>
              <IconButton aria-label="add">
                <AddCircleOutlineIcon fontSize="large" color="secondary" />
              </IconButton>
            </Box>
            <Button color="secondary" variant="contained" size="large" endIcon={<LocalMallIcon />}>Add to cart</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
