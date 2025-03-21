import { Box, Container, Typography } from "@mui/material"

export default function AboutHikariSection() {
    return(
        <Container maxWidth="lg" sx={{ mt: { md: 2, sm: 1.5, xs: 1 }, mb: 0 }}>
        <Box
        sx={{
            paddingY: { xs: 2, sm: 3 },
            paddingX: { xs: 1, sm: 4 },
            color: "#000",
        }}
        >
      <Typography
        component="h2"
        variant="body1"
        sx={{
            color: "#000",
            fontWeight: "300",
            textAlign: { xs: "center", sm: "left" }, // Centrerad text på små skärmar
            width: "100%", // Säkerställer att den är centrerad korrekt på små skärmar
        }}
      >
        Hikari means "light." Inspired by japaneese traditions, each candle is carefully handcrafted using the ancient technique “Hikari o Tsukuru”, which has been passed down for generations.<br /><br />

        Made from 100% organic, plant-based wax, every candle reflects our dedication to authenticity and sustainability. Hikari candles capture the essence of craftsmanship and purity, offering a clean, long-lasting burn infused with gentle and natural scents.<br /><br />

        Hikari is more than just a source of light, it’s a bridge between tradition and modern living, bringing a sense of serenity and harmony to your space and soul.<br /><br />

        Light your way with the essence of nature - HIKARI.

      </Typography>
      </Box>
  
  

  </Container>
    )
}