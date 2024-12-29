import { Typography } from "@mui/material";

type HeroTextProps = {
  textAlign: "left" | "center" | "right";
  children: React.ReactNode;
};

const styles = {
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: 500,
  lineHeight: "100%",
  letterSpacing: "0.04em",
  fontSize: "2rem",

  "@media (min-width: 382px)": {
    fontSize: "2.3rem",
  },

  "@media (min-width: 484px)": {
    fontSize: "2.5rem",
  },

  "@media (min-width: 558px)": {
    fontSize: "3rem",
  },

  "@media (min-width: 768px)": {
    fontSize: "4rem",
  },

  "@media (min-width: 1024px)": {
    fontSize: "5.62rem",
  },
};

export const HeroText = ({ textAlign, children }: HeroTextProps) => {
  return (
    <Typography variant="h2" sx={{ ...styles, textAlign: textAlign }}>
      {children}
    </Typography>
  );
};
