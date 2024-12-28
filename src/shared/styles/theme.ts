"use client";
import { paletteColors } from "@/shared";
import { createTheme } from "@mui/material/styles";
import { M_PLUS_1p } from "next/font/google";

const mplus1p = M_PLUS_1p({
  variable: "--font-mplus1p",
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: "1216px",
            paddingLeft: "0",
            paddingRight: "0",
          },
          "@media (max-width: 1200px)": {
            maxWidth: "960px", // Например, для планшетов
          },
          "@media (max-width: 600px)": {
            maxWidth: "100%",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3rem",
          fontWeight: 700,
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 400,
          textAlign: "center",
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: 500,
        },
        body1: {
          fontSize: "1rem",
          fontWeight: 400,
        },
        body2: {
          fontSize: "0.875rem",
          fontWeight: 400,
        },
      },
    },
  },
  typography: {
    fontFamily: mplus1p.style.fontFamily,
  },
  palette: {
    primary: {
      main: paletteColors.primary,
    },
    secondary: {
      main: paletteColors.secondary,
    },
    accent: {
      main: paletteColors.accent,
    },
    text: {
      primary: paletteColors.textPrimary,
    },
    background: {
      default: paletteColors.background,
      paper: paletteColors.background,
    },
  },
});
