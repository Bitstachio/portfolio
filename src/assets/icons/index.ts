import { FC, SVGProps } from "react";
import GitHubIcon from "./social/github.svg";
import GmailIcon from "./social/gmail.svg";
import LinkedInIcon from "./social/linkedin.svg";
import AndroidStudioIcon from "./tech/androidstudio.svg";
import ApacheIcon from "./tech/apache.svg";
import CppIcon from "./tech/cpp.svg";
import CSharpIcon from "./tech/csharp.svg";
import D3Icon from "./tech/d3.svg";
import DockerIcon from "./tech/docker.svg";
import ElectronIcon from "./tech/electron.svg";
import ExpressIcon from "./tech/express.svg";
import FirebaseIcon from "./tech/firebase.svg";
import HibernateIcon from "./tech/hibernate.svg";
import JavaIcon from "./tech/java.svg";
import JavaScriptIcon from "./tech/javascript.svg";
import JenkinsIcon from "./tech/jenkins.svg";
import MssqlIcon from "./tech/mssql.svg";
import MySqlIcon from "./tech/mysql.svg";
import NetworkXIcon from "./tech/networkx.svg";
import NextIcon from "./tech/nextjs.svg";
import NodeIcon from "./tech/nodejs.svg";
import NumPyIcon from "./tech/numpy.svg";
import OracleIcon from "./tech/oracle.svg";
import PandasIcon from "./tech/pandas.svg";
import PythonIcon from "./tech/python.svg";
import ReactIcon from "./tech/react.svg";
import SeleniumIcon from "./tech/selenium.svg";
import SequelizeIcon from "./tech/sequelize.svg";
import SpringIcon from "./tech/spring.svg";
import TypeScriptIcon from "./tech/typescript.svg";
import UnityIcon from "./tech/unity.svg";

type TIcon = {
  label: string;
  svg: FC<SVGProps<SVGElement>>;
};

export type TIconName = keyof typeof icons;

export const icons = {
  // Social
  github: {
    label: "GitHub",
    svg: GitHubIcon,
  },
  gmail: {
    label: "Gmail",
    svg: GmailIcon,
  },
  linkedin: {
    label: "LinkedIn",
    svg: LinkedInIcon,
  },
  // Programming
  androidStudio: {
    label: "Android Studio",
    svg: AndroidStudioIcon,
  },
  apachePoi: {
    label: "Apache POI",
    svg: ApacheIcon,
  },
  cpp: {
    label: "C++",
    svg: CppIcon,
  },
  csharp: {
    label: "C#",
    svg: CSharpIcon,
  },
  d3: {
    label: "D3.js",
    svg: D3Icon,
  },
  docker: {
    label: "Docker",
    svg: DockerIcon,
  },
  electron: {
    label: "Electron",
    svg: ElectronIcon,
  },
  express: {
    label: "Exress",
    svg: ExpressIcon,
  },
  firebase: {
    label: "Firebase",
    svg: FirebaseIcon,
  },
  hibernate: {
    label: "Hibernate",
    svg: HibernateIcon,
  },
  java: {
    label: "Java",
    svg: JavaIcon,
  },
  javascript: {
    label: "JavaScript",
    svg: JavaScriptIcon,
  },
  jenkins: {
    label: "Jenkins",
    svg: JenkinsIcon,
  },
  mssql: {
    label: "MSSQL",
    svg: MssqlIcon,
  },
  mysql: {
    label: "MySQL",
    svg: MySqlIcon,
  },
  networkx: {
    label: "NetworkX",
    svg: NetworkXIcon,
  },
  next: {
    label: "Next.js",
    svg: NextIcon,
  },
  node: {
    label: "Node.js",
    svg: NodeIcon,
  },
  numpy: {
    label: "NumPy",
    svg: NumPyIcon,
  },
  oracleDb: {
    label: "Oracle DB",
    svg: OracleIcon,
  },
  pandas: {
    label: "Pandas",
    svg: PandasIcon,
  },
  python: {
    label: "Python",
    svg: PythonIcon,
  },
  react: {
    label: "React",
    svg: ReactIcon,
  },
  selenium: {
    label: "Selenium",
    svg: SeleniumIcon,
  },
  sequelize: {
    label: "Sequelize",
    svg: SequelizeIcon,
  },
  spring: {
    label: "Spring Boot",
    svg: SpringIcon,
  },
  typescript: {
    label: "TypeScript",
    svg: TypeScriptIcon,
  },
  unity: {
    label: "Unity",
    svg: UnityIcon,
  },
} satisfies Record<string, TIcon>;
