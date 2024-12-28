import { Container } from "@mui/material";

type FooterLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  display: "flex",
  gap: "14px",
  alignItems: "center",
  paddingBottom: "30px",
};

export const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <footer>
      <Container sx={styles}>{children}</Container>
    </footer>
  );
};
