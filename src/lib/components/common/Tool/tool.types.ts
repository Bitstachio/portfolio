import type { tools } from "./tool.constants";

export interface IToolProps {
	name: string;
	imgSrc: string;
	backgroundColor?: string;
	textColor?: string;
}

export type TToolKey = keyof typeof tools;
