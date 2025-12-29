import Connect from "../components/sections/Connect/Connect";
import Experience from "../components/sections/Experience/Experience";
import Intro from "../components/sections/Intro/Intro";

export default function Home() {
  return (
    <main>
      <header>
        <Intro />
        <Connect />
      </header>
      <section>
        <Experience />
      </section>
    </main>
  );
}
