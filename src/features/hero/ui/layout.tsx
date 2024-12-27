import { Box, Container } from "@mui/material";
import heroBackground from "./../images/hero-bg.png";
type HeroLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  backgroundImage: `url(${heroBackground.src})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <Box sx={styles}>
      <Container>{children}</Container>
    </Box>
  );
}
