import { Box } from "@mui/material";

type BlogsCardsLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
};

export const BlogsCardsLayout = ({ children }: BlogsCardsLayoutProps) => {
  return <Box sx={styles}>{children}</Box>;
};
