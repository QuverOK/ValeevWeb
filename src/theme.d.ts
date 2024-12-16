import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    accent: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}
