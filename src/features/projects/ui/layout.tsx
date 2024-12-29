import { Container } from "@mui/material";

export type ProjectsLayoutProps = {
  children: React.ReactNode;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "64px",

    "@media (max-width: 1200px)": {
      maxWidth: "100%",
    },
  },
};

export function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <section>
      <Container sx={styles.container}>{children}</Container>
    </section>
  );
}
