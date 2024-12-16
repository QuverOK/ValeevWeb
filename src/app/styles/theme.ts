"use client";
import { createTheme } from "@mui/material/styles";
import { styles } from "./stylesVariables";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: styles.primary,
    },
    secondary: {
      main: styles.secondary,
    },
    accent: {
      main: styles.accent,
    },
    action: {
      active: styles.background,
    },
    background: {
      default: styles.background,
      paper: styles.background,
    },
  },
  typography: {
    fontFamily: "var(--font-mplus1p)",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "normal",
        },
      },
    },
  },
});
