import { Box, Typography } from "@mui/material";

export type BlogsCardCategoriesProps = {
  categories: { id: string; name: string; color: string }[]; // !TEMP
};

const styles = {
  box: {},
  cardTag: {
    fontWeight: 300,
    lineHeight: "100%",
    fontSize: "0.88rem",
  },
};

export const BlogsCardCategories = ({
  categories,
}: BlogsCardCategoriesProps) => {
  return (
    <Box sx={styles.box}>
      {categories.map((category) => (
        <Typography
          key={category.id}
          variant="body2"
          sx={{ ...styles.cardTag, color: category.color }}
        >
          {category.name}
        </Typography>
      ))}
    </Box>
  );
};
