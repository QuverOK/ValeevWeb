import { Card, CardContent, Grid2, Typography } from "@mui/material";
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
    aspectRatio: "1.5/1",
    boxShadow: "none",
    background: "inherit",

    "@media (min-width: 1024px)": {
      aspectRatio: "1/1",
    },
  },
  description: {
    fontWeight: 400,
    lineHeight: "120%",
    fontSize: "1.25rem",
    width: "70%",
    margin: "0",
    color: "secondary.main",
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
    <Grid2 size={{ xs: 12, md: 6 }}>
      <article>
        <Link href={link} target="_blank" style={styles.link}>
          {/* // !TEMP _blank  */}
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography
                variant="h3"
                color="secondary.main"
                fontWeight={500}
                fontSize={"3rem"}
                lineHeight={"100%"}
                letterSpacing={"0.15em"}
              >
                {title}
              </Typography>
              <Typography variant="body2" sx={styles.description}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </article>
    </Grid2>
  );
};
