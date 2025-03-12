import { Box, Card, Container, Typography } from "@mui/material";

export default async function ProductPage() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box
          component="article"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",

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
            <Typography component="h2" variant="h2">Haru 春 "The Essence of Spring"</Typography>
          </Box>
        </Box>
      </Container>
    </main>
  )
}
