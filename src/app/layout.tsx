import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/shared";

export const metadata: Metadata = {
  title: "Danila Valeev",
  description: "Danila Valeev's personal website",
};

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
      <body>
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
