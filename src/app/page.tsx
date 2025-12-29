import Projects from "@/components/sections/Projects/Projects";
import Connect from "../components/sections/Connect/Connect";
import Experience from "../components/sections/Experience/Experience";
import Intro from "../components/sections/Intro/Intro";
import Navbar from "@/components/sections/Navbar/Navbar";
import About from "@/components/sections/About/About";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <div className="flex justify-between gap-4 md:py-12">
        <header className="w-1/2 max-w-sm md:ps-5">
          <Intro />
          <Navbar />
          <Connect />
        </header>
        <main className="flex flex-col gap-16 w-1/2">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
