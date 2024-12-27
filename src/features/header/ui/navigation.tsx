"use client";

import { NavigationItem } from "@/shared";
import { Box, Button } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavigationProps = {
  navigationList: NavigationItem[];
};

const buttonStyles = {
  fontSize: "1.12rem",
  lineHeight: "133%",
  letterSpacing: "-0.01em",
  textTransform: "none",
  padding: 0,
  minWidth: 0,
};

export const HeaderNavigation = ({ navigationList }: HeaderNavigationProps) => {
  const currentRoute = usePathname();

  return (
    <Box display={"flex"} gap={"20px"}>
      {navigationList.map((navItem) => (
        <Link key={navItem.id} href={navItem.route}>
          <Button
            color="primary"
            sx={{
              ...buttonStyles,
              fontWeight: navItem.route === currentRoute ? 700 : 400,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
                color: navItem.route === currentRoute ? "" : "secondary.main",
              },
            }}
            disableRipple
            disableElevation
          >
            {navItem.title}
          </Button>
        </Link>
      ))}
    </Box>
  );
};
