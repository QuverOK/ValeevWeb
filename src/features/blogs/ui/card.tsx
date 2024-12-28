import { Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import { BlogsCardCategories } from "./cardCategories";
import { BlogsCardTitleAndDate } from "./cardTitleAndDate";

type BlogsCardProps = {
  categories: { id: string; name: string; color: string }[]; // !TEMP
  title: string;
  date: Date;
};

const styles = {
  card: {
    maxWidth: 280,
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: 0,
  },
};

export const BlogsCard = ({ categories, title, date }: BlogsCardProps) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Card sx={styles.card}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://i.pinimg.com/736x/ef/d1/6a/efd16a3aa93c2a43f7e8ce4a2507a2d3.jpg"
          title="A meme dog"
        />
        <CardContent sx={styles.cardContent}>
          <BlogsCardCategories categories={categories} />
          <BlogsCardTitleAndDate title={title} date={date} />
        </CardContent>
      </Card>
    </Link>
  );
};
