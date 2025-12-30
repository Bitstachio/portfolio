import { TBadgeName } from "@/components/ui/Badge/Badge.types";

export type TProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  fileName: string;
  badgeNames: TBadgeName[];
};
