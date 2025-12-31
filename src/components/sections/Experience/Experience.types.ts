import { TBadgeName } from "@/components/ui/Badge/Badge.types";

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
  badgeNames: TBadgeName[];
};
