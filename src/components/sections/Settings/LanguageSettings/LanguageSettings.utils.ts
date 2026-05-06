import { isLocale } from "@/i18n/config";
import { Language } from "./LanguageSettings.types";

export const isLanguage = (value: string): value is Language => isLocale(value);
