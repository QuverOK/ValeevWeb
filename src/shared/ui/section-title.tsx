import { Typography } from "@mui/material";
import { paletteColors } from "../styles/paletteVariables";

type UiSectionTitleProps = {
  children: React.ReactNode;
};

export const UiSectionTitle = ({ children }: UiSectionTitleProps) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: paletteColors.textPrimary,
        fontWeight: "regular",
        fontSize: "2rem",
        textAlign: "center",
        lineHeight: "100%",
      }}
    >
      {children}
    </Typography>
  );
};
