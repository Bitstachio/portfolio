import type { TToolKey } from "$lib/components/common/Tool/tool.types";
import { tools } from "$lib/components/common/Tool/tool.constants";

export const getTools = (keys: TToolKey[]) => keys.map((key) => tools[key]);
