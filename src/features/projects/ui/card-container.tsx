import { Grid2 } from "@mui/material";

const styles = {
  justifyContent: "center",
};

export function ProjectsCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid2 container spacing={{ xs: "12px", lg: "32px" }} sx={styles}>
      {children}
    </Grid2>
  );
}
