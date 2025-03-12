import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

export default async function ProductPage() {
  return (
    <main>
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
            <CardMedia component="img" image="https://picsum.photos/id/16/500" alt="" src="https://picsum.photos/id/16/900">
            </CardMedia>
          </Card>
          <Box>
            <Typography component="h2" sx={{ display: "flex", flexDirection: "column" }}>
              <Typography component="span" variant="h3">Haru 春</Typography>
              <Typography component="span" variant="h4">"The Essence of Spring"</Typography>
            </Typography>
            <Typography component="p">Fresh, floral, and full of life, Haru captures the awakening of springtime. The scent of dewy grass, wildflowers in bloom, and delicate morning mist creates a light and uplifting atmosphere.</Typography>
            <Typography component="div" variant="h4">
              Price:&nbsp;
              <Typography component="span" variant="h4">
                790
              </Typography>
              &nbsp;SEK
            </Typography>
          </Box>
        </Box>
      </Container>
    </main >
  )
}
