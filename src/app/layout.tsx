import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/shared";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Danila Valeev",
  description: "Danila Valeev's personal website",
};

const inter = localFont({
  src: "../shared/fonts/Inter/Inter-VariableFont.ttf",
  variable: "--font-inter",
});

const bodyContainerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "80px",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={bodyContainerStyles}>{children}</Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
