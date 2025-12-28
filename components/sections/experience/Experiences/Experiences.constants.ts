import { TCompany, TExperience } from "./Experiences.types";

const companies: Record<string, TCompany> = {
  kpm: {
    name: "KPM Power Inc.",
    url: "https://www.kpmpower.com/",
  },
  mccss: {
    name: "Ministry of Children, Community and Social Services",
    url: "https://www.ontario.ca/page/ministry-children-community-and-social-services",
  },
  cmg: {
    name: "York University | Conceptual Modelling Group",
    url: "https://hdl.handle.net/10315/39447",
  },
  aimmlab: {
    name: "York University | AI & Mathematical Modelling Lab",
    url: "https://aimmlab.org/",
  },
};

export const experiences: TExperience[] = [
  {
    id: "kpm-fullstack-dev-2025-06",
    title: "Full-Stack Developer",
    company: companies.kpm,
    description:
      "I worked on software used directly on the production floor. I built a React-based assembly tree view that made it easier for workers to navigate components, saving significant manual effort. I also developed a Node.js and Express API that enabled live tracking across dozens of production kiosks, helping teams detect issues immediately. In addition, I led the development of a kiosk application using Electron, WebSockets, and Docker, centralizing session logic in an API to keep the system reliable even during kiosk failures.",
    startDate: new Date(2025, 4, 1),
    endDate: new Date(2025, 7, 31),
  },
  {
    id: "mccss-backend-dev-2024-06",
    title: "Back-End Developer",
    company: companies.mccss,
    description:
      "I developed back-end services for a healthcare system used by public health agencies across Ontario. My work focused on implementing business logic for creating and searching patient records using Java, Spring Boot, and Oracle Database. I also built a reporting service that allowed users to track patient record changes by date. Alongside a small team, I helped containerize the system and set up CI/CD pipelines with Docker and Jenkins, which significantly reduced deployment time.",
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
  },
  {
    id: "mccss-qa-automation-2023-10",
    title: "QA Automation Developer",
    company: companies.mccss,
    description:
      "I built and maintained an automated testing system to replace slow, manual regression testing. Using Java and Selenium, I developed a test suite that covered the full regression workflow and cut testing time by several days. I also created a data access layer using JDBC and SQL stored procedures to generate test data automatically, greatly reducing preparation effort. To support reporting and bug tracking, I automated the creation of Excel test reports using Apache POI.",
    startDate: new Date(2023, 8, 1),
    endDate: new Date(2024, 3, 30),
  },
  {
    id: "cmg-research-assistant-2024-06",
    title: "Research Assistant",
    company: companies.cmg,
    description:
      "I worked on a research project focused on blockchain consensus protocols. I developed a Java-based simulator that modeled an abstract Bitcoin network and proof-of-work mechanism. I also refactored existing codebases to improve structure and maintainability, integrated Maven for builds, and added unit testing with Mockito and PowerMock. To reduce boilerplate and improve readability, I introduced Lombok across the project.",
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
  },
  {
    id: "aimmlab-research-assistant-2023-06",
    title: "Research Assistant",
    company: companies.aimmlab,
    description:
      "I contributed to a research project on infectious disease modeling. I built a simulator in Python using NetworkX and NumPy to study how diseases spread through networks. I also collected and cleaned large-scale forum data, processing millions of messages using BeautifulSoup and pandas to support topic modeling and analysis.",
    startDate: new Date(2023, 4, 1),
    endDate: new Date(2023, 7, 31),
  },
];
