import Projects from "@/components/sections/Projects/Projects";
import Connect from "../components/sections/Connect/Connect";
import Experience from "../components/sections/Experience/Experience";
import Intro from "../components/sections/Intro/Intro";
import Navbar from "@/components/sections/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Intro />
        <Navbar />
        <Connect />
      </header>
      <section>
        <Experience />
        <Projects />
      </section>
    </main>
  );
}
