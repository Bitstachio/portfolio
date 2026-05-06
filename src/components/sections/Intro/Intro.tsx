import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations("intro");

  return (
    <header>
      <h1 className="text-strong text-5xl font-bold tracking-tighter">{t("name")}</h1>
      <p className="text-strong mt-3 text-xl font-semibold">{t("role")}</p>
      <p className="mt-4">{t("subtitle")}</p>
    </header>
  );
};

export default Intro;
