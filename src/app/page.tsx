import { Header } from "@/features/header";
import { Hero } from "@/features/hero";
import { Projects } from "@/features/projects";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
          <Hero />
          <Projects />
        </Box>
      </main>
    </>
  );
}
