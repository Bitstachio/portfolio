"use client";

import ComposableDropdown from "@/components/ui/ComposableDropdown/ComposableDropdown";
import Icon from "@/components/ui/Icon/Icon";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { languages } from "./LanguageSettings.constants";
import { isLanguage } from "./LanguageSettings.utils";
import { useMemo } from "react";

const LanguageSettings = () => {
  const t = useTranslations("settings.language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const options = useMemo(
    () =>
      languages.map((option) => ({
        ...option,
        label: t(`options.${option.value}`),
      })),
    [t],
  );

  return (
    <div className="relative">
      <ComposableDropdown
        options={options}
        value={locale}
        triggerAriaLabel={t("triggerAriaLabel")}
        listAriaLabel={t("listAriaLabel")}
        onChange={(value) => {
          if (!isLanguage(value)) return;

          const hash = typeof window !== "undefined" ? window.location.hash : "";
          router.replace(`${pathname}${hash}`, { locale: value });
        }}
        trigger={
          <Icon
            name="language"
            className="fill-muted hover:fill-strong duration-standard h-5 w-5 cursor-pointer transition-[fill] sm:h-6 sm:w-6"
          />
        }
        renderLabel={(option) => (
          <div className="flex justify-between">
            {option.label}
            <Icon
              name={option.value}
              className="fill-muted hover:fill-strong duration-standard h-5 w-5 transition-[fill] sm:h-5 sm:w-5"
            />
          </div>
        )}
      />
      <Icon
        name={locale}
        className="fill-muted duration-standard pointer-events-none absolute -top-0.5 -right-0.5 h-2 w-2 transition-[fill] sm:h-3 sm:w-3"
      />
    </div>
  );
};

export default LanguageSettings;
