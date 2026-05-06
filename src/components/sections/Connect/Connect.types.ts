import { TIconName } from "@/assets/icons";

export type TConnectLinkId = "github" | "linkedin" | "gmail";

export type TConnectLinkConfig = {
  id: TConnectLinkId;
  iconName: TIconName;
  href: string;
};
