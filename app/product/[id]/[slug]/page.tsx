import { Box, Card, Container, Typography } from "@mui/material";

export default async function ProductPage() {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <Box
          component="article"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1rem",
          }}
        >
          <Card>
            <img
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt=""
            />
          </Card>
          <Box>
            <Typography component="h2" variant="h3">
              Haru 春
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
    </main>
  )
}
