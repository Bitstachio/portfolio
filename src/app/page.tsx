import Connect from "../../components/sections/Connect/Connect";
import Experiences from "../../components/sections/experience/Experiences/Experiences";
import Intro from "../../components/sections/Intro/Intro";

export default function Home() {
  return (
    <main>
      <header>
        <Intro />
        <Connect />
      </header>
      <section>
        <Experiences />
      </section>
    </main>
  );
}
