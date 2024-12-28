import { Box } from "@mui/material";

type BlogLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  padding: "0",
  px: "20px",
};

export const BlogsLayout = ({ children }: BlogLayoutProps) => {
  return (
    <section>
      <Box sx={styles}>{children}</Box>
    </section>
  );
};
