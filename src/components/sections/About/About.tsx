import TextLink from "@/components/ui/TextLink/TextLink";
import { useTranslations } from "next-intl";

const About = () => {
  const yearsSinceStart = new Date().getFullYear() - 2019;
  const t = useTranslations("about");

  return (
    <article id="about" className="flex flex-col gap-3">
      <p>
        {t.rich("paragraph1", {
          robotc: (chunks) => <TextLink href="https://www.robotc.net/">{chunks}</TextLink>,
          lego: (chunks) => <TextLink href="https://en.wikipedia.org/wiki/Lego_Mindstorms_EV3">{chunks}</TextLink>,
          bookTitle: (chunks) => (
            <TextLink
              href="https://www.indigo.ca/en-ca/c-programming-for-the-absolute-beginner/9781598638752.html"
              italicize={true}
            >
              {chunks}
            </TextLink>
          ),
        })}
      </p>

      <p>
        {t("paragraph2", {
          yearsSinceStart,
        })}
      </p>

      <p>{t("paragraph3")}</p>
    </article>
  );
};

export default About;
