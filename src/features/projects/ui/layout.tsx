import { Container } from "@mui/material";

export type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "64px",
  },
};

export function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <section>
      <Container sx={styles.container}>{children}</Container>
    </section>
  );
}
