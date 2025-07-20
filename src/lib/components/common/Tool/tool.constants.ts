import type { IToolProps } from "./tool.types";

export const tools = {
	javascript: {
		iconSrc: "src/lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
		name: "JavaScript",
	},
	nodeJS: {
		name: "Node.js",
		iconSrc: "src/lib/assets/dev-icons/nodejs-original.svg",
		backgroundColor: "yellow",
	},
	java: {
		name: "Java",
		iconSrc: "src/lib/assets/dev-icons/java-original.svg",
	},
	spring: {
		name: "Spring Boot",
		iconSrc: "src/lib/assets/dev-icons/spring-original.svg",
	},
	androidStudio: {
		name: "Android Studio",
		iconSrc: "src/lib/assets/dev-icons/androidstudio-original.svg",
	},
	gcp: {
		name: "Google Cloud Platform",
		iconSrc: "src/lib/assets/dev-icons/googlecloud-original.svg",
	},
	firebase: {
		name: "Firebase",
		iconSrc: "src/lib/assets/dev-icons/firebase-original.svg",
	},
	csharp: {
		name: "C#",
		iconSrc: "src/lib/assets/dev-icons/csharp-original.svg",
	},
	unity: {
		name: "Unity",
		iconSrc: "src/lib/assets/dev-icons/unity-original.svg",
	},
	cpp: {
		name: "C++",
		iconSrc: "src/lib/assets/dev-icons/cplusplus-original.svg",
	},
	arduino: {
		name: "Arduino",
		iconSrc: "src/lib/assets/dev-icons/arduino-original.svg",
	},
} satisfies Record<string, IToolProps>;

export const toolIconHeight = 20;
