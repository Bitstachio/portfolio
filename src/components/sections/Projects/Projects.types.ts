import { TIconName } from "@/assets/icons";

export type TProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  fileName: string;
  badgeNames: TIconName[];
};
