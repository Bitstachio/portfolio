import { TIconName } from "@/assets/icons";

export type TProjectId = "deepseeker" | "mad-grid" | "solve-me" | "midi-chord-arpeggiator";

export type TProject = {
  id: TProjectId;
  url: string;
  fileName: string;
  badgeNames: TIconName[];
};
