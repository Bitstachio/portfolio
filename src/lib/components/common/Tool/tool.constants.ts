import type { IToolProps } from "./tool.types";

export const tools = {
	javascript: {
		imgSrc: "$lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
		name: "JavaScript",
	},
	nodejs: {
		name: "Node.js",
		imgSrc: "$lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
	},
} satisfies Record<string, IToolProps>;
