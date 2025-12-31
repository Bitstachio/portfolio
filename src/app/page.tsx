import Projects from "@/components/sections/Projects/Projects";
import Connect from "../components/sections/Connect/Connect";
import Experience from "../components/sections/Experience/Experience";
import Intro from "../components/sections/Intro/Intro";
import Navbar from "@/components/sections/Navbar/Navbar";
import About from "@/components/sections/About/About";

export default function Home() {
  return (
    <div className="px-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between gap-4 items-start">
        <header className="sticky top-0 h-screen w-1/2 max-w-sm flex flex-col justify-between py-24 md:ps-5">
          <div className="flex flex-col gap-16">
            <Intro />
            <Navbar />
          </div>
          <Connect />
        </header>
        <main className="w-1/2 flex flex-col gap-16 py-24">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
