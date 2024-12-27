import { Typography } from "@mui/material";
import { paletteColors } from "../styles/paletteVariables";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
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
