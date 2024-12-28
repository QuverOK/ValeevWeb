import { SocialList } from "@/shared";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "next/link";

const styles = {
  list: { display: "flex", gap: "14px", padding: 0 },
  listItem: {
    padding: 0,
    margin: 0,
    width: "initial",
  },
  listItemText: {
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: "120%",
    color: "primary.main",
  },
};

export const FooterSocialList = ({ socials }: { socials: SocialList[] }) => {
  return (
    <Box>
      <List sx={styles.list}>
        {socials.map((social) => (
          <ListItem key={social.id} sx={styles.listItem}>
            <ListItemText>
              <Typography sx={styles.listItemText} variant="body1">
                <Link
                  href="#"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "inherit",
                  }}
                >
                  {social.title}
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
