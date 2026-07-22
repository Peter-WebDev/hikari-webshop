"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#D6CCC2",
          dark: "#C1B8AF",
        },
        secondary: {
          main: "#040404",
          light: "#403D3A",
          dark: "#1E1E1E",
        },
        background: {
          default: "#EDEDE9",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#403D3A",
          dark: "#33302E",
        },
        secondary: {
          main: "#D6CCC2",
          light: "#EDEDE9",
          dark: "#B8AC9F",
        },
        background: {
          default: "#141312",
          paper: "#1E1C1A",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-jost)",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});

export default theme;
