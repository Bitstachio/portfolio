import { Option } from "@/lib/types";

export const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
] as const satisfies readonly Option[];
