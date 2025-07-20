import type { INamedIcon } from "$lib/types";

const pathDevIcons = "dev-icons/";
const pathLanguages = pathDevIcons + "languages/";
const pathFrameworks = pathDevIcons + "frameworks/";
const pathTools = pathDevIcons + "tools/";

export const skills = [];

export const programmingLanguages: INamedIcon[] = [
	{
		name: "Java",
		iconSrc: pathLanguages + "java.svg",
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
		name: "Typescript",
		iconSrc: pathLanguages + "typescript.svg",
	},
	{
		name: "C#",
		iconSrc: pathLanguages + "csharp.svg",
	},
	{
		name: "C",
		iconSrc: pathLanguages + "c.svg",
	},
	// {
	// 	name: "HTML",
	// 	iconSrc: pathLanguages + "html.svg",
	// },
	// {
	// 	name: "CSS",
	// 	iconSrc: pathLanguages + "css.svg",
	// },
];

export const frameworks: INamedIcon[] = [
	{
		name: "Spring Boot",
		iconSrc: pathFrameworks + "spring.svg",
	},
	{
		name: ".NET Core",
		iconSrc: pathFrameworks + "dotnetcore.svg",
	},
	{
		name: "React",
		iconSrc: pathFrameworks + "react.svg",
	},
	{
		name: "Node.js",
		iconSrc: pathFrameworks + "nodejs.svg",
	},
	{
		name: "Express",
		iconSrc: pathFrameworks + "express.svg",
	},
	{
		name: "Selenium",
		iconSrc: pathFrameworks + "selenium.svg",
	},
	{
		name: "Flask",
		iconSrc: pathFrameworks + "flask.svg",
	},
	{
		name: "Unity",
		iconSrc: pathFrameworks + "unity.svg",
	},
	{
		name: "Svelte",
		iconSrc: pathFrameworks + "svelte.svg",
	},
];

export const tools: INamedIcon[] = [
	{
		name: "Git",
		iconSrc: pathTools + "git.svg",
	},
	{
		name: "Postman",
		iconSrc: pathTools + "postman.svg",
	},
	{
		name: "Docker",
		iconSrc: pathTools + "docker.svg",
	},
	{
		name: "Maven",
		iconSrc: pathTools + "maven.svg",
	},
	{
		name: "Vite",
		iconSrc: pathTools + "vite.svg",
	},
	{
		name: "Webpack",
		iconSrc: pathTools + "webpack.svg",
	},
	{
		name: "Jenkins",
		iconSrc: pathTools + "jenkins.svg",
	},
	{
		name: "Android Studio",
		iconSrc: pathTools + "android-studio.svg",
	},
	{
		name: "firebase",
		iconSrc: pathTools + "firebase.svg",
	},
	{
		name: "Google Cloud Platform",
		iconSrc: pathTools + "gcp.svg",
	},
	// {
	// 	name: "MySQL",
	// 	iconSrc: pathTools + "mysql.svg",
	// },
	{
		name: "Vercel",
		iconSrc: pathTools + "vercel.svg",
	},
];
