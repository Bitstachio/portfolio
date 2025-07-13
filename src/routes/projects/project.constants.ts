import type { IProjectLinkProps, IProjectProps } from "./project.types";
import { getTools } from "./project.utils";

export const projectLinkTypes = {
	demo: {
		srcIcon: "",
	},
	github: {
		srcIcon: "src/lib/assets/dev-icons/github-original.svg",
	},
	googlePlay: {
		srcIcon: "",
	},
	itch: {
		srcIcon: "src/lib/assets/dev-icons/itch.svg",
	},
} satisfies Record<string, IProjectLinkProps>;

export const projectConfigs: IProjectProps[] = [
	{
		title: "Mad Grid",
		description: ["Description #1", "Description #2", "Description #3"],
		tools: getTools(["java", "androidStudio", "spring", "firebase", "gcp"]),
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/mad-grid",
			},
		],
	},
	{
		title: "Solve Me!",
		description: ["Description #1", "Description #2", "Description #3"],
		tools: getTools(["javascript", "nodeJS"]),
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/solve-me",
			},
		],
	},
	{
		title: "Ampere",
		description: ["Description #1", "Description #2", "Description #3"],
		tools: getTools(["arduino", "cpp"]),
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/ampere",
			},
		],
	},
	{
		title: "Deep Seeker",
		description: ["Description #1", "Description #2", "Description #3"],
		tools: getTools(["csharp", "unity"]),
		links: [
			{
				type: "itch",
				address: "https://nessyu.itch.io/deepseeker",
			},
			{
				type: "github",
				address: "https://github.com/Bitstachio/deepseeker",
			},
		],
	},
];
