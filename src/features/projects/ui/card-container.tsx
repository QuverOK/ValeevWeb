import { Box } from "@mui/material";

const styles = {
  display: "flex",
  gap: "24px",
  flexDirection: "column",
  justifyContent: "center",
  "@media (min-width: 1000px)": {
    display: "block",
    columns: "2",
    columnGap: "32px",
  },
};

export function ProjectsCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={styles}>{children}</Box>;
}
