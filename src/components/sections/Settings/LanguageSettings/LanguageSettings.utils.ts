import { languages } from "./LanguageSettings.constants";
import { Language } from "./LanguageSettings.types";

const languageOptions = new Set<string>(languages.map((option) => option.value));

export const isLanguage = (value: string): value is Language => languageOptions.has(value);
