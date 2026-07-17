"use client";
import { CLOUDINARY_VIDEO_BASE } from "@/app/utils/cloudinary";
import { Box, Typography } from "@mui/material"; // Importera Box från MUI
import { useEffect, useState } from "react";

interface HeroSectionProps {
  page?: "home" | "about";
}

const videos: string[] = [
  `${CLOUDINARY_VIDEO_BASE}/aka.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/blossom.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/cherry.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/haru.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/kaigan.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/kaze.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/mori.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/spring.mp4`,
  `${CLOUDINARY_VIDEO_BASE}/suna.mp4`,
];

const HeroSection = ({ page = "home" }: HeroSectionProps) => {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoSrc(randomVideo); //uppdaterar videoSrc så att videon byts ut.
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      {videoSrc && (
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 120px)",
        }}
      />

 {/* Text-rubrik, placeras olika beroende på om man är på about-page eller på övriga sidor */}
 {page === "about" ? (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: "1rem",
            paddingLeft: { xs: "2rem", sm: "4rem", md: "18rem" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 300,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.125rem" },
            }}
          >
            ABOUT HIKARI
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              color: "#fff",
              paddingLeft: { xs: "0.5rem", sm: "4rem", md: "8.7rem" },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.125rem" },
              fontWeight: 300,
              textAlign: { xs: "center", sm: "left" },
              width: "100%",
            }}
          >
            HIKARI - THE ESSENCE OF NATURE
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;

{
  /*
//"use client" säger till nextjs att rendera slumpfunktionen i useEffect på klientsidan och inte rendera på servern per default
videoSrc, state variabel som håller reda på vilken video som ska visas, genom att lagra sökvägen till den slumpade videon. 
//setVideoSrc, funktion som uppdaterar videoSrc. useState kmr hantera tillståndet och uppdatera statet med setVideoSrc så att komponenten uppdateras automatiskt. 
//Math.random() genererar ett slumptal mellan 0 och 1 och multiplicerar med videos.length för att få en slumpmässig indexplats i arrayen. Math.floor() ger en giltlig indexplats.
//Math.floor() rundar av till närmaste heltal så att vi får en giltig indexplats.*/
}
