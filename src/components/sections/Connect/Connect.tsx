import Image from "next/image";
import { connectLinkConfigs } from "./Connect.constants";

const Connect = () => (
  <ul className="flex items-center gap-4">
    {connectLinkConfigs.map((config) => (
      <li key={config.id}>
        <a href={config.href}>
          <Image
            src={`/connect-icons/${config.fileName}.svg`}
            alt={`${config.id} logo`}
            width={24}
            height={24}
            className="text-red-700"
          />
        </a>
      </li>
    ))}
  </ul>
);

export default Connect;
