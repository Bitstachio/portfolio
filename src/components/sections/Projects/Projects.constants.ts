import { TProject } from "./Projects.types";

export const projects = [
  {
    id: "deepseeker",
    url: "https://nessyu.itch.io/deepseeker",
    fileName: "deepseeker",
    badgeNames: ["csharp", "unity"],
  },
  {
    id: "mad-grid",
    url: "https://github.com/Bitstachio/mad-grid",
    fileName: "mad-grid",
    badgeNames: ["java", "androidStudio", "spring", "firebase"],
  },
  {
    id: "solve-me",
    url: "https://bitstachio.github.io/solve-me",
    fileName: "solve-me",
    badgeNames: ["javascript", "d3"],
  },
  {
    id: "midi-chord-arpeggiator",
    url: "https://github.com/Bitstachio/midi-chord-arpeggiator",
    fileName: "midi-chord-arpeggiator",
    badgeNames: ["cpp", "juce"],
  },
] satisfies TProject[];
