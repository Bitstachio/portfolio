import { icons, TIconName } from "@/assets/icons";
import Icon from "../Icon/Icon";

type TBadgeProps = {
  name: TIconName;
};

const Badge = ({ name }: TBadgeProps) => (
  <div className="bg-accent/20 flex w-fit items-center gap-2 rounded-full p-2">
    <Icon name={name} className="fill-accent h-3 w-3 sm:h-4 sm:w-4" />
    <span className="text-accent text-xs">{icons[name].label}</span>
  </div>
);

export default Badge;
