import { Box, Typography } from "@mui/material";

type BlogsCardTitleAndDateProps = {
  title: string;
  date: Date;
};

const styles = {
  box: { display: "flex", flexDirection: "column", gap: "16px" },
  cardTitle: {
    color: "text.primary",
    fontWeight: 400,
    lineHeight: "117%",
    fontSize: "1.5rem",
  },
  cardDate: {
    color: "secondary.main",
    fontWeight: 500,
    lineHeight: "129%",
    fontSize: "0.88rem",
  },
};

export const BlogsCardTitleAndDate = ({
  title,
  date,
}: BlogsCardTitleAndDateProps) => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h5" sx={styles.cardTitle}>
        {title}
      </Typography>
      <Typography variant="body2" sx={styles.cardDate}>
        {date.toLocaleDateString("ru-RU")}
      </Typography>
    </Box>
  );
};
