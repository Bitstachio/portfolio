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
    company: companies.kpm,
    startDate: new Date(2025, 4, 1),
    endDate: new Date(2025, 7, 31),
    badgeNames: ["javascript", "typescript", "react", "node", "express", "electron", "sequelize", "mysql"],
  },
  {
    id: "mccss-backend-dev-2024-06",
    company: companies.mccss,
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
    badgeNames: ["java", "spring", "hibernate", "docker", "jenkins", "oracleDb"],
  },
  {
    id: "mccss-qa-automation-2023-10",
    company: companies.mccss,
    startDate: new Date(2023, 8, 1),
    endDate: new Date(2024, 3, 30),
    badgeNames: ["java", "selenium", "apachePoi", "mssql"],
  },
  {
    id: "cmg-research-assistant-2024-06",
    company: companies.cmg,
    startDate: new Date(2024, 4, 1),
    endDate: new Date(2024, 7, 31),
    badgeNames: ["java"],
  },
  {
    id: "aimmlab-research-assistant-2023-06",
    company: companies.aimmlab,
    startDate: new Date(2023, 4, 1),
    endDate: new Date(2023, 7, 31),
    badgeNames: ["python", "pandas", "numpy", "networkx"],
  },
];
