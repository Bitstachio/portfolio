import type { INamedIcon } from "$lib/types";

const pathDevIcons = "dev-icons/";
const pathLanguages = pathDevIcons + "languages/";
const pathFrameworks = pathDevIcons + "frameworks/";
const pathTools = pathDevIcons + "tools/";

export const programmingLanguages: INamedIcon[] = [
	{
		name: "Java",
		iconSrc: pathLanguages + "java.svg",
	},
	{
		name: "C#",
		iconSrc: pathLanguages + "csharp.svg",
	},
	{
		name: "Python",
		iconSrc: pathLanguages + "python.svg",
	},
	{
		name: "JavaScript",
		iconSrc: pathLanguages + "javascript.svg",
	},
	{
		name: "C",
		iconSrc: pathLanguages + "c.svg",
	},
	{
		name: "HTML",
		iconSrc: pathLanguages + "html.svg",
	},
	{
		name: "CSS",
		iconSrc: pathLanguages + "css.svg",
	},
];

export const frameworks: INamedIcon[] = [];

export const tools: INamedIcon[] = [];
