import { Typography } from "@mui/material";

type UiSectionTitleProps = {
  children: React.ReactNode;
};

const style = {
  color: "text.primary",
  fontWeight: "regular",
  fontSize: "2rem",
  textAlign: "center",
  lineHeight: "100%",
}

export const UiSectionTitle = ({ children }: UiSectionTitleProps) => {
  return (
    <Typography
      variant="h3"
      sx={style}
    >
      {children}
    </Typography>
  );
};
