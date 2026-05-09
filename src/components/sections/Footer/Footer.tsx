import TextLink from "@/components/ui/TextLink/TextLink";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="text-muted text-sm">
        {t.rich("copyright", {
          year,
          nextjs: (chunks) => <TextLink href="https://nextjs.org/">{chunks}</TextLink>,
          githubPages: (chunks) => <TextLink href="https://docs.github.com/en/pages">{chunks}</TextLink>,
        })}
      </p>
    </footer>
  );
};

export default Footer;
