"use client";
import { Box } from "@mui/material";

const ProductHeroVideo = ({ videoName }: { videoName: string }) => {
  const videoSrc = `/assets/herovideos/${videoName.toLowerCase()}.mp4`;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "20vh",
        overflow: "hidden",
        mb: 4,
      }}
    >
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
    </Box>
  );
};

export default ProductHeroVideo;
