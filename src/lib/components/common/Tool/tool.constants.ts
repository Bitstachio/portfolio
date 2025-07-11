import type { IToolProps } from "./tool.types";

export const tools = {
	javascript: {
		imgSrc: "$lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
		name: "JavaScript",
	},
	nodeJS: {
		name: "Node.js",
		imgSrc: "$lib/assets/dev-icons/javascript-original.svg",
		backgroundColor: "yellow",
	},
    java: {
        name: "Java",
        imgSrc: "$lib/assets/dev-icons/java-original.svg",
    },
    spring: {
        name: "Spring Boot",
        imgSrc: "$lib/assets/dev-icons/spring-original.svg",
    },
    androidStudio: {
        name: "Android Studio",
        imgSrc: "$lib/assets/dev-icons/androidstudio-original.svg",
    },
    gcp: {
        name: "Google Cloud Platform",
        imgSrc: "$lib/assets/dev-icons/googlecloud-original.svg",
    },
    firebase: {
        name: "Firebase",
        imgSrc: "$lib/assets/dev-icons/firebase-original.svg",
    },
    csharp: {
        name: "C#",
        imgSrc: "$lib/assets/dev-icons/csharp-original.svg",
    },
    unity: {
        name: "Unity",
        imgSrc: "$lib/assets/dev-icons/unity-original.svg",
    },
    arduino: {
        name: "Arduino",
        imgSrc: "$lib/assets/dev-icons/arduino-original.svg",
    },
} satisfies Record<string, IToolProps>;
