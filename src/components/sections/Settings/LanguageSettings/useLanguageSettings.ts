import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useLanguageSettings = (t: ReturnType<typeof useTranslations<"settings.language">>) => {
  const options = useMemo(
    () =>
      locales.map((locale) => ({
        value: locale,
        label: t(`options.${locale}`),
      })),
    [t],
  );

  return { options };
};
