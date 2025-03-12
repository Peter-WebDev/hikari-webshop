"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D6CCC2",
    },
    secondary: {
      main: "#040404",
      light: "#403D3A",
      dark: "#3E3E3E",
    },
    background: {
      default: "#EDEDE9",
    },
  },
  typography: {
    fontFamily: "var(--font-jost)",
  },
});

export default theme;
