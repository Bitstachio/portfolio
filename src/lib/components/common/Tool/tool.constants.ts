import type { IToolProps } from "./tool.types";

export const tools = {
	javascript: {
		imgSrc: "src/lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
		name: "JavaScript",
	},
	nodeJS: {
		name: "Node.js",
		imgSrc: "src/lib/assets/dev-icons/nodejs-original.svg",
		backgroundColor: "yellow",
	},
	java: {
		name: "Java",
		imgSrc: "src/lib/assets/dev-icons/java-original.svg",
	},
	spring: {
		name: "Spring Boot",
		imgSrc: "src/lib/assets/dev-icons/spring-original.svg",
	},
	androidStudio: {
		name: "Android Studio",
		imgSrc: "src/lib/assets/dev-icons/androidstudio-original.svg",
	},
	gcp: {
		name: "Google Cloud Platform",
		imgSrc: "src/lib/assets/dev-icons/googlecloud-original.svg",
	},
	firebase: {
		name: "Firebase",
		imgSrc: "src/lib/assets/dev-icons/firebase-original.svg",
	},
	csharp: {
		name: "C#",
		imgSrc: "src/lib/assets/dev-icons/csharp-original.svg",
	},
	unity: {
		name: "Unity",
		imgSrc: "src/lib/assets/dev-icons/unity-original.svg",
	},
	cpp: {
		name: "C++",
		imgSrc: "src/lib/assets/dev-icons/cplusplus-original.svg",
	},
	arduino: {
		name: "Arduino",
		imgSrc: "src/lib/assets/dev-icons/arduino-original.svg",
	},
} satisfies Record<string, IToolProps>;

export const toolIconHeight = 20;
