import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

type ProjectsCardProps = {
  title: string;
  description: string;
  link: string;
};

const styles = {
  link: {
    textDecoration: "none",
    width: "100%",
  },
  card: {
    position: "relative",
    aspectRatio: "1/1",
    boxShadow: "none",
  },
  description: {
    fontWeight: 400,
    lineHeight: "120%",
    fontSize: "1.25rem",
    width: "70%",
    margin: "0",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    position: "absolute",
    bottom: "50px",
    left: "20px",
    padding: "0",
    "&:last-child": {
      padding: 0,
    },
  },
};

export const ProjectsCard = ({
  title,
  description,
  link,
}: ProjectsCardProps) => {
  return (
    <Link href={link} style={styles.link}>
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <Typography
            variant="h3"
            color="secondary"
            fontWeight={500}
            fontSize={"3rem"}
            lineHeight={"100%"}
            letterSpacing={"0.15em"}
          >
            {title}
          </Typography>
          <p style={styles.description}>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
