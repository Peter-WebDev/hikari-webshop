"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D6CCC2",
    },
    secondary: {
      main: "#403D3A",
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
