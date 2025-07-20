import type { MONTHS } from "$lib/constants";

export type TMonth = (typeof MONTHS)[number]["name"];

export interface INamedIcon {
	name: string;
	iconSrc: string;
}
