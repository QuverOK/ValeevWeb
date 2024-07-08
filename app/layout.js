import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Valeev's Web",
  description: "Персональный блог и портфоило Данилы Валеев (quverok)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={clsx(inter.className, "text-main")}>{children}</body>
    </html>
  );
}
