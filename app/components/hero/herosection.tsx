"use client";
import { Box } from "@mui/material"; // Importera Box från MUI
import { useEffect, useState } from "react";

const videos: string[] = [
  "/assets/herovideos/redflower-video.mp4",
  "/assets/herovideos/spring-video.mp4",
  "/assets/herovideos/orange-video.mp4",
  "/assets/herovideos/whiteandblue-video.mp4",
  "/assets/herovideos/orange2-video.mp4",
  "/assets/herovideos/purple-video2.mp4",
  "/assets/herovideos/turqoise-video.mp4",
];

const HeroSection = () => {
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
        width: "100vw",
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
