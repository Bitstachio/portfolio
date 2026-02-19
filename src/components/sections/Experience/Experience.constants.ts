import { TCompany, TExperience } from "./Experience.types";

const companies = {
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
} satisfies Record<string, TCompany>;

export const experiences: TExperience[] = [
  {
    id: "kpm-fullstack-dev-2025-06",
    title: "Full-Stack Developer",
    company: companies.kpm,
    description:
      "Worked on software used directly on the production floor. Built a React-based assembly tree view that simplified component navigation and reduced manual effort. Developed a Node.js and Express API for live tracking across dozens of production kiosks, enabling immediate issue detection. Led development of a kiosk application using Electron, WebSockets, and Docker, centralizing session logic in an API to maintain reliability during kiosk failures.",
    startDate: new Date(2025, 4, 1),
    endDate: new Date(2025, 7, 31),
    badgeNames: ["javascript", "typescript", "react", "node", "express", "electron", "sequelize", "mysql"],
  },
  {
    id: "mccss-backend-dev-2024-06",
    title: "Back-End Developer",
    company: companies.mccss,
    description:
      "Developed back-end services for a healthcare system used by public health agencies across Ontario. Implemented business logic for creating and searching patient records using Java, Spring Boot, and Oracle Database. Built a reporting service to track patient record changes by date, and helped containerize the system and set up CI/CD pipelines with Docker and Jenkins to significantly reduce deployment time.",
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
    badgeNames: ["java", "spring", "hibernate", "docker", "jenkins", "oracleDb"],
  },
  {
    id: "mccss-qa-automation-2023-10",
    title: "QA Automation Developer",
    company: companies.mccss,
    description:
      "Built and maintained an automated testing system to replace manual regression testing. Developed a Java and Selenium test suite covering the full regression workflow, reducing testing time by several days. Created a data access layer with JDBC and SQL stored procedures to automate test data generation, and automated Excel test reports using Apache POI.",
    startDate: new Date(2023, 8, 1),
    endDate: new Date(2024, 3, 30),
    badgeNames: ["java", "selenium", "apachePoi", "mssql"],
  },
  {
    id: "cmg-research-assistant-2024-06",
    title: "Research Assistant",
    company: companies.cmg,
    description:
      "Worked on a research project focused on blockchain consensus protocols. Developed a Java-based simulator modeling an abstract Bitcoin network and proof-of-work mechanism. Refactored existing codebases for better structure and maintainability, integrated Maven builds, added unit testing with Mockito and PowerMock, and introduced Lombok to reduce boilerplate.",
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
    badgeNames: ["java"],
  },
  {
    id: "aimmlab-research-assistant-2023-06",
    title: "Research Assistant",
    company: companies.aimmlab,
    description:
      "Contributed to a research project on infectious disease modeling. Built a Python-based simulator using NetworkX and NumPy to study disease spread through networks. Collected and cleaned large-scale forum data, processing millions of messages with BeautifulSoup and pandas to support topic modeling and analysis.",
    startDate: new Date(2023, 4, 1),
    endDate: new Date(2023, 7, 31),
    badgeNames: ["python", "pandas", "numpy", "networkx"],
  },
];
