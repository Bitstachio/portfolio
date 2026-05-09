import InitialFadeIn from "@/components/animations/InitialFadeIn";
import About from "@/components/sections/About/About";
import Connect from "@/components/sections/Connect/Connect";
import Experience from "@/components/sections/Experience/Experience";
import Footer from "@/components/sections/Footer/Footer";
import Intro from "@/components/sections/Intro/Intro";
import Navbar from "@/components/sections/Navbar/Navbar";
import Projects from "@/components/sections/Projects/Projects";
import Settings from "@/components/sections/Settings/Settings";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

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
          <div className="flex justify-between">
            <Connect />
            <Settings />
          </div>
        </InitialFadeIn>
        <InitialFadeIn as="main" delayMs={180} className="flex w-[52%] flex-col gap-24 py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </InitialFadeIn>
      </div>
    </div>
  );
};

export default HomePage;

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({
    locale,
  }));
