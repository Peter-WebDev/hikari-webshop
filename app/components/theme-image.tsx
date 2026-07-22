"use client";
import { CardMedia } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface ThemeImageProps {
  light: string;
  dark?: string | null;
  alt?: string;
  sx?: SxProps<Theme>;
}

/**
 * Renders the light or dark variant of an image depending on the active
 * color scheme. Both variants are rendered and toggled with CSS so the
 * correct one shows on first paint, without hydration flicker.
 */
export default function ThemeImage({ light, dark, alt = "", sx }: ThemeImageProps) {
  const sxArray = Array.isArray(sx) ? sx : [sx];

  if (!dark) {
    return <CardMedia component="img" image={light} alt={alt} sx={sx} />;
  }

  return (
    <>
      <CardMedia
        component="img"
        image={light}
        alt={alt}
        sx={[
          ...sxArray,
          (theme) => theme.applyStyles("dark", { display: "none" }),
        ]}
      />
      <CardMedia
        component="img"
        image={dark}
        alt={alt}
        sx={[
          ...sxArray,
          { display: "none" },
          (theme) => theme.applyStyles("dark", { display: "block" }),
        ]}
      />
    </>
  );
}
