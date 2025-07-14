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
		description: [
			"Created and published a sequence memory game on Google Play using Java and Android Studio",
			"Developed and deployed an API on Google Cloud Platform using Java, Spring Boot, Firebase, and WebSockets enabling two-way client-server communication for real-time gaming and matchmaking",
		],
		tools: getTools(["java", "androidStudio", "spring", "firebase", "gcp"]),
		srcImg: "project/mad-grid.png",
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/mad-grid",
			},
		],
	},
	{
		title: "Solve Me!",
		description: [
			"Created a web application implementing and visualizing pathfinding algorithms: breadth-first search (BFS), depth-first search (DFS), and recursive backtracking",
			"Utilized asynchronous JavaScript functions in conjunction with the MutationObserver API to handle smooth maze animations, in addition to generating an algorithm performance chart using the D3.js data visualization library",
		],
		tools: getTools(["javascript", "nodeJS"]),
		srcImg: "project/solve-me.png",
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/solve-me",
			},
		],
	},
	{
		title: "Ampere",
		description: [
			"Built a self-driving bot for robot-sumo competitions from the ground up, showcasing proficiency with Arduino and C++",
			"Incorporated an ultrasonic (distance) and two reflectance sensors, enabling precise obstacle detection and navigation",
			"Designed the chassis using Tinkercad (CAD software) and manufactured it using 3D printing",
		],
		tools: getTools(["arduino", "cpp"]),
		srcImg: "project/ampere.png",
		links: [
			{
				type: "github",
				address: "https://github.com/Bitstachio/ampere",
			},
		],
	},
	{
		title: "Deep Seeker",
		description: [
			"Collaborated in a team of 5 to develop a 2D platformer using C# and Unity",
			"Created custom animations and implemented fight mechanics, lighting, and physics-based movement",
			"Leveraged Unity’s animation system and physics engine for smooth and responsive player controls",
		],
		tools: getTools(["csharp", "unity"]),
		srcImg: "project/deepseeker.png",
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
