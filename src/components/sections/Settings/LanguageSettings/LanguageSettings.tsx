"use client";

import ComposableDropdown from "@/components/ui/ComposableDropdown/ComposableDropdown";
import Icon from "@/components/ui/Icon/Icon";
import { useState } from "react";
import { languages } from "./LanguageSettings.constants";
import { Language } from "./LanguageSettings.types";

type LanguageSettingsProps = {};

const LanguageSettings = ({}: LanguageSettingsProps) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <ComposableDropdown
      options={languages}
      value={language}
      onChange={(value) => {
        console.log(`New language selected: ${value}`);
        setLanguage(value);
      }}
      trigger={
        <Icon
          name="language"
          className="fill-muted hover:fill-strong duration-standard h-5 w-5 cursor-pointer transition-[fill] sm:h-6 sm:w-6"
        />
      }
    />
  );
};

export default LanguageSettings;
