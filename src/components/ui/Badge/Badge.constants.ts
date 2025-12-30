import ReactIcon from "@/assets/icons/react.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import { TBadge } from "./Badge.types";

export const badges = {
  typescript: {
    label: "TypeScript",
    icon: TypeScriptIcon,
  },
  react: {
    label: "React",
    icon: ReactIcon,
  },
} satisfies Record<string, TBadge>;
