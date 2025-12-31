import { TIconName } from "@/assets/icons";

export type TCompany = {
  name: string;
  url: string;
};

export type TExperience = {
  id: string;
  title: string;
  company: TCompany;
  description: string;
  startDate: Date;
  endDate?: Date;
  badgeNames: TIconName[];
};
