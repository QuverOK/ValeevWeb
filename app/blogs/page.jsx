import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FOOTER_LINKS } from "@/helpers/logic/variables";

export default function Blogs() {
  return (
    <ThemeProvider>
      <BlogsLayout
        header={<Header />}
        footer={<Footer footerLinks={FOOTER_LINKS} />}
      ></BlogsLayout>
    </ThemeProvider>
  );
}

function BlogsLayout({ header, footer, children }) {
  return (
    <div className="bg-[rgb(var(--background-primary))] text-[rgb(var(--accent))] flex flex-col min-h-[100vh]">
      {header}
      <main className="flex-grow">{children}</main>
      {footer}
    </div>
  );
}
