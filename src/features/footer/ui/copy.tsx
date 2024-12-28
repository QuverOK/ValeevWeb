import { Typography } from "@mui/material";

export const FooterCopy = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="body2"
      fontWeight={500}
      fontSize={"1.25rem"}
      lineHeight={"120%"}
      color="primary.main"
    >
      {children}
    </Typography>
  );
};
