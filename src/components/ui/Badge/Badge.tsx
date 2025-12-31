import { icons, TIconName } from "@/assets/icons";
import Icon from "../Icon/Icon";

type TBadgeProps = {
  name: TIconName;
};

const Badge = ({ name }: TBadgeProps) => (
  <div className="flex w-fit items-center p-2 rounded-full gap-2 bg-accent/20">
    <Icon name={name} className="h-3 w-3 sm:h-4 sm:w-4 fill-accent" />
    <span className="text-xs text-accent">{icons[name].label}</span>
  </div>
);

export default Badge;
