import { Typography } from "@mui/material";

type HeroTextProps = {
  textAlign: "left" | "center" | "right";
  children: React.ReactNode;
};

const styles = {
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: 500,
  fontSize: "5.62rem",
  lineHeight: "100%",
  letterSpacing: "0.04em",
};

export const HeroText = ({ textAlign, children }: HeroTextProps) => {
  return (
    <Typography variant="h2" sx={{ ...styles, textAlign: textAlign }}>
      {children}
    </Typography>
  );
};
