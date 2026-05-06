import { TIconName } from "@/assets/icons";

export type TExperienceId =
  | "kpm-fullstack-dev-2025-06"
  | "mccss-backend-dev-2024-06"
  | "mccss-qa-automation-2023-10"
  | "cmg-research-assistant-2024-06"
  | "aimmlab-research-assistant-2023-06";

export type TCompany = {
  name: string;
  url: string;
};

export type TExperience = {
  id: TExperienceId;
  company: TCompany;
  startDate: Date;
  endDate?: Date;
  badgeNames: TIconName[];
};
