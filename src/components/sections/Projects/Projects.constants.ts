import { TProject } from "./Projects.types";

export const projects = [
  {
    id: "deepseeker",
    name: "DeepSeeker",
    description:
      "Collaborated with a team of 5 to design, develop, and publish an indie underwater exploration game on itch.io.",
    url: "https://nessyu.itch.io/deepseeker",
    fileName: "deepseeker",
  },
  {
    id: "mad-grid",
    name: "Mad Grid",
    description:
      "Developed a multiplayer sequence memory game for Android and created an API implementing the STOMP protocol to enable two-way client-server communication for real-time gaming and matchmaking.",
    url: "https://github.com/Bitstachio/mad-grid",
    fileName: "mad-grid",
  },
] satisfies TProject[];
