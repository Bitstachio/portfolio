import TextLink from "@/components/ui/TextLink/TextLink";

const About = () => {
  const yearsSinceStart = new Date().getFullYear() - 2019;

  return (
    <article id="about" className="flex flex-col gap-3">
      <p>
        My interest in programming began in 2019 through an introductory robotics course in high school with{" "}
        <TextLink href="https://www.robotc.net/">ROBOTC</TextLink> and{" "}
        <TextLink href="https://en.wikipedia.org/wiki/Lego_Mindstorms_EV3">LEGO Mindstorms EV3</TextLink> bots. I had a
        rocky start to the course, struggling with the most basic concepts, and constantly questioning whether
        programming was right for me. However, after hours of staring at the screen in frustration looking for bugs,
        things started to click and become enjoyable. The following summer, I picked up Mark Lee&apos;s book,{" "}
        <TextLink
          href="https://www.indigo.ca/en-ca/c-programming-for-the-absolute-beginner/9781598638752.html"
          italicize={true}
        >
          C++ Programming for the Absolute Beginner
        </TextLink>
        , and started viewing software engineering as a potential career.
      </p>

      <p>
        Fast forward {yearsSinceStart} years, I&apos;m currently a fourth-year Computer Science student at York
        University. I have had the privilege of gaining professional software development experience across startup,
        public-sector, and research environments. My primary skill is full-stack web development, and I&apos;m currently
        delving deeper into distributed computing and cloud technologies.
      </p>

      <p>
        In my spare time, I&apos;m usually practicing tar (Persian classical instrument), playing chess, or watching
        football.
      </p>
    </article>
  );
};

export default About;
