import { Locale, locales } from "@/i18n/config";

export const languageValues = [...locales] as readonly Locale[];

type LanguageOption = {
  value: Locale;
  label: string;
};

export const languages = languageValues.map((value) => ({ value, label: value })) as readonly LanguageOption[];
