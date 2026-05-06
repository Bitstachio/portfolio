"use client";

import { Option } from "@/lib/types";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import useComposableDropdown from "./useComposableDropdown";

type ComposableDropdownProps<TOption extends Option> = {
  options: readonly TOption[];
  value: string;
  onChange: (value: string) => void;
  trigger: ReactNode;
  triggerAriaLabel: string;
  renderLabel?: (option: TOption) => ReactNode;
  listAriaLabel: string;
};

const defaultRenderLabel = <TOption extends Option>(option: TOption) => option.label;

const ComposableDropdown = <TOption extends Option>({
  options,
  value,
  onChange,
  trigger,
  triggerAriaLabel,
  renderLabel = defaultRenderLabel,
  listAriaLabel,
}: ComposableDropdownProps<TOption>) => {
  const { open, setOpen, rootRef, selected } = useComposableDropdown(options, value);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={triggerAriaLabel}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
        className="inline-flex items-center gap-2"
      >
        {trigger}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={listAriaLabel}
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
                  className={cn(
                    "block w-full rounded px-3 py-2 text-left text-sm",
                    isSelected ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5",
                  )}
                >
                  {renderLabel(option)}
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
