import Projects from "@/components/sections/Projects/Projects";
import Connect from "../components/sections/Connect/Connect";
import Experience from "../components/sections/Experience/Experience";
import Intro from "../components/sections/Intro/Intro";
import Navbar from "@/components/sections/Navbar/Navbar";
import About from "@/components/sections/About/About";
import InitialFadeIn from "@/components/animations/InitialFadeIn";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6">
      <div className="flex items-start justify-between gap-4">
        <InitialFadeIn
          as="header"
          delayMs={0}
          className="sticky top-0 flex h-screen w-[48%] max-w-sm flex-col justify-between py-24 md:ps-5"
        >
          <div className="flex flex-col gap-16">
            <Intro />
            <Navbar />
          </div>
          <Connect />
        </InitialFadeIn>
        <InitialFadeIn as="main" delayMs={180} className="flex w-[52%] flex-col gap-24 py-24">
          <About />
          <Experience />
          <Projects />
        </InitialFadeIn>
      </div>
    </div>
  );
}
