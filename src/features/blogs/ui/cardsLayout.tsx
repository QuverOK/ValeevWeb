import { Box } from "@mui/material";

type BlogsCardsLayoutProps = {
  children: React.ReactNode;
};

export const BlogsCardsLayout = ({ children }: BlogsCardsLayoutProps) => {
  return <Box sx={{ display: "flex", gap: "10px" }}>{children}</Box>;
};
