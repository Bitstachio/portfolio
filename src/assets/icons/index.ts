import GitHubIcon from "@/assets/icons/social/github.svg";
import GmailIcon from "@/assets/icons/social/gmail.svg";
import LinkedInIcon from "@/assets/icons/social/linkedin.svg";
import { FC, SVGProps } from "react";

type TIcon = {
  label: string;
  svg: FC<SVGProps<SVGElement>>;
};

export const icons = {
  github: {
    label: "GitHub",
    svg: GitHubIcon,
  },
  gmail: {
    label: "Gmail",
    svg: GmailIcon,
  },
  linkedin: {
    label: "LinkedIn",
    svg: LinkedInIcon,
  },
} satisfies Record<string, TIcon>;

export type TIconName = keyof typeof icons;
