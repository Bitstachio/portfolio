// TODO: Consider creating a client wrapper for language change
"use client";

import ComposableDropdown from "@/components/ui/ComposableDropdown/ComposableDropdown";
import Icon from "@/components/ui/Icon/Icon";
import { useState } from "react";

const Settings = () => {
  const [value, setValue] = useState("en");

  return (
    <div>
      <ComposableDropdown
        options={[
          { value: "en", label: "English" },
          { value: "fr", label: "French" },
          { value: "de", label: "German" },
        ]}
        value={value}
        onChange={(value) => {
          console.log(`New language selected: ${value}`);
          setValue(value);
        }}
        trigger={
          <Icon
            name="language"
            className="fill-muted hover:fill-strong duration-standard h-5 w-5 cursor-pointer transition-[fill] sm:h-6 sm:w-6"
          />
        }
      />
    </div>
  );
};

export default Settings;
