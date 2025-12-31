import Icon from "@/components/ui/Icon/Icon";
import { connectLinkConfigs } from "./Connect.constants";

const Connect = () => (
  <ul className="flex items-center gap-5 ps-3">
    {connectLinkConfigs.map((config) => (
      <li key={config.id}>
        <a href={config.href}>
          <Icon
            name={config.iconName}
            className="h-5 w-5 sm:h-6 sm:w-6 fill-subtle hover:fill-muted transition-[fill] duration-300"
          />
        </a>
      </li>
    ))}
  </ul>
);

export default Connect;
