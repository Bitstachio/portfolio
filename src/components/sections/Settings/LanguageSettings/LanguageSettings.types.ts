import { languages } from "./LanguageSettings.constants";

export type Language = (typeof languages)[number]["value"];
