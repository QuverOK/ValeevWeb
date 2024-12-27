import { Box } from "@mui/material";

type HeroTextContainerProps = {
  children: React.ReactNode;
};

const styles = {
  py: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "170px",
};

export const HeroContainerText = ({ children }: HeroTextContainerProps) => {
  return <Box sx={styles}>{children}</Box>;
};
