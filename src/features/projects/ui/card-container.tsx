import { Box } from "@mui/material";

const styles = {};

export function ProjectsCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ display: "flex", gap: "32px" }}>{children}</Box>;
}
