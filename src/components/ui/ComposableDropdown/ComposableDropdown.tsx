"use client";

import { Option } from "@/lib/types";
import { ReactNode } from "react";
import useComposableDropdown from "./useComposableDropdown";

type ComposableDropdownProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  trigger: ReactNode;
};

const ComposableDropdown = ({ options, value, onChange, trigger }: ComposableDropdownProps) => {
  const { open, setOpen, rootRef, selected } = useComposableDropdown(options, value);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2"
      >
        {trigger}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language options"
          className="absolute bottom-full left-0 mb-2 min-w-36 rounded-md border border-white/10 bg-zinc-900 p-1 shadow-lg"
        >
          {options.map((option) => {
            const isSelected = option.value === selected?.value;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`block w-full rounded px-3 py-2 text-left text-sm ${
                    isSelected ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ComposableDropdown;
