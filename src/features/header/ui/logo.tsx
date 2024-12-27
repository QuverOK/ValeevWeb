"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLogoProps = {
  children: React.ReactNode;
};

export const HeaderLogo = ({ children }: HeaderLogoProps) => {
  const currentRoute = usePathname();
  return (
    <Link
      href="/"
      passHref
      style={{
        cursor: currentRoute === "/" ? "default" : "pointer",
        textDecoration: "none",
      }}
    >
      <Typography
        variant="h6"
        color="textPrimary"
        fontSize={"1.5rem"}
        fontWeight={500}
        letterSpacing={"0.05em"}
        lineHeight={"100%"}
        sx={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </Typography>
    </Link>
  );
};
