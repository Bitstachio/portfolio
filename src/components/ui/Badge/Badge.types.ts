import { ReactNode } from "react";
import { badges } from "./Badge.constants";

export type TBadge = {
  label: string;
  icon: ReactNode;
};

export type TBadgeName = keyof typeof badges;
