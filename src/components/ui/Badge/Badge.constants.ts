import AndroidStudioIcon from "@/assets/icons/androidstudio.svg";
import ApacheIcon from "@/assets/icons/apache.svg";
import CppIcon from "@/assets/icons/cpp.svg";
import CsharpIcon from "@/assets/icons/csharp.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import ElectronIcon from "@/assets/icons/electron.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import HibernateIcon from "@/assets/icons/hibernate.svg";
import JavaIcon from "@/assets/icons/java.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import JenkinsIcon from "@/assets/icons/jenkins.svg";
import MssqlIcon from "@/assets/icons/mssql.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";
import NetworkXIcon from "@/assets/icons/networkx.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import NumPyIcon from "@/assets/icons/numpy.svg";
import OracleIcon from "@/assets/icons/oracle.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SeleniumIcon from "@/assets/icons/selenium.svg";
import SequelizeIcon from "@/assets/icons/sequelize.svg";
import SpringIcon from "@/assets/icons/spring.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import UnityIcon from "@/assets/icons/unity.svg";
import { TBadge } from "./Badge.types";

export const badges = {
  androidStudio: {
    label: "Android Studio",
    icon: AndroidStudioIcon,
  },
  apachePoi: {
    label: "Apache POI",
    icon: ApacheIcon,
  },
  cpp: {
    label: "C++",
    icon: CppIcon,
  },
  csharp: {
    label: "C#",
    icon: CsharpIcon,
  },
  docker: {
    label: "Docker",
    icon: DockerIcon,
  },
  electron: {
    label: "Electron",
    icon: ElectronIcon,
  },
  express: {
    label: "Exress",
    icon: ExpressIcon,
  },
  firebase: {
    label: "Firebase",
    icon: FirebaseIcon,
  },
  hibernate: {
    label: "Hibernate",
    icon: HibernateIcon,
  },
  java: {
    label: "Java",
    icon: JavaIcon,
  },
  javascript: {
    label: "JavaScript",
    icon: JavaScriptIcon,
  },
  jenkins: {
    label: "Jenkins",
    icon: JenkinsIcon,
  },
  mssql: {
    label: "MSSQL",
    icon: MssqlIcon,
  },
  mysql: {
    label: "MySQL",
    icon: MySqlIcon,
  },
  networkx: {
    label: "NetworkX",
    icon: NetworkXIcon,
  },
  next: {
    label: "Next.js",
    icon: NextIcon,
  },
  node: {
    label: "Node.js",
    icon: NodeIcon,
  },
  numpy: {
    label: "NumPy",
    icon: NumPyIcon,
  },
  oracleDb: {
    label: "Oracle DB",
    icon: OracleIcon,
  },
  pandas: {
    label: "Pandas",
    icon: PandasIcon,
  },
  python: {
    label: "Python",
    icon: PythonIcon,
  },
  react: {
    label: "React",
    icon: ReactIcon,
  },
  selenium: {
    label: "Selenium",
    icon: SeleniumIcon,
  },
  sequelize: {
    label: "Sequelize",
    icon: SequelizeIcon,
  },
  spring: {
    label: "Spring Boot",
    icon: SpringIcon,
  },
  typescript: {
    label: "TypeScript",
    icon: TypeScriptIcon,
  },
  unity: {
    label: "Unity",
    icon: UnityIcon,
  },
} satisfies Record<string, TBadge>;
