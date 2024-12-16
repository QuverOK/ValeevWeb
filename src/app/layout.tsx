import type { Metadata } from "next";
import { Inter, M_PLUS_1p } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import clsx from "clsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles";

const mplus1p = M_PLUS_1p({
  variable: "--font-mplus1p",
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["500"],
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Danila Valeev",
  description: "Danila Valeev's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={clsx(mplus1p.variable, inter.variable)}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
