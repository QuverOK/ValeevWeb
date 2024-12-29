import { Box } from "@mui/material";

type HeroTextContainerProps = {
  children: React.ReactNode;
};

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  py: "70px",
  gap: "80px",

  "@media (min-width: 484px)": {
    py: "70px",
    gap: "80px",
  },

  "@media (min-width: 558px)": {
    py: "80px",
    gap: "100px",
  },

  "@media (min-width: 768px)": {
    py: "100px",
    gap: "170px",
  },

  "@media (min-width: 1024px)": {
    py: "100px",
    gap: "170px",
  },
};

export const HeroContainerText = ({ children }: HeroTextContainerProps) => {
  return <Box sx={styles}>{children}</Box>;
};
