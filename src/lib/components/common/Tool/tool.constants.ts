import type { IToolProps } from "./tool.types";

export const tools = {
	javascript: {
		iconSrc: "dev-icons/languages/javascript.svg",
		backgroundColor: "yellow",
		name: "JavaScript",
	},
	nodeJS: {
		name: "Node.js",
		iconSrc: "dev-icons/frameworks/nodejs.svg",
		backgroundColor: "yellow",
	},
	java: {
		name: "Java",
		iconSrc: "dev-icons/languages/java.svg",
	},
	spring: {
		name: "Spring Boot",
		iconSrc: "dev-icons/frameworks/spring.svg",
	},
	androidStudio: {
		name: "Android Studio",
		iconSrc: "dev-icons/tools/android-studio.svg",
	},
	gcp: {
		name: "Google Cloud Platform",
		iconSrc: "dev-icons/tools/gcp.svg",
	},
	firebase: {
		name: "Firebase",
		iconSrc: "dev-icons/tools/firebase.svg",
	},
	csharp: {
		name: "C#",
		iconSrc: "dev-icons/languages/csharp.svg",
	},
	unity: {
		name: "Unity",
		iconSrc: "dev-icons/frameworks/unity.svg",
	},
	cpp: {
		name: "C++",
		iconSrc: "dev-icons/languages/cpp.svg",
	},
	arduino: {
		name: "Arduino",
		iconSrc: "dev-icons/frameworks/arduino.svg",
	},
} satisfies Record<string, IToolProps>;

export const toolIconHeight = 20;
