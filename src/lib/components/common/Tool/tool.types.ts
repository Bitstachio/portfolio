import type { tools } from "./tool.constants";
import type { INamedIcon } from "$lib/types";

export interface IToolProps extends INamedIcon {
	backgroundColor?: string;
	textColor?: string;
}

export type TToolKey = keyof typeof tools;
