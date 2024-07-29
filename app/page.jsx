import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Overview } from "../components/Overview";
import { FOOTER_LINKS } from "../helpers/logic/variables";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <HomeLayout
        header={<Header />}
        footer={<Footer footerLinks={FOOTER_LINKS} />}
      >
        <Overview />
      </HomeLayout>
    </ThemeProvider>
  );
}

function HomeLayout({ header, footer, children }) {
  return (
    <div className="bg-[rgb(var(--background-primary))] text-[rgb(var(--accent))] flex flex-col min-h-[100vh]">
      {header}
      <main className="flex-grow">{children}</main>
      {footer}
    </div>
  );
}
