import { badges } from "./Badge.constants";
import { TBadgeName } from "./Badge.types";

type TBadgeProps = {
  name: TBadgeName;
};

const Badge = ({ name }: TBadgeProps) => {
  const Icon = badges[name].icon;
  return (
    <div className="flex w-fit items-center p-2 rounded-full gap-2 bg-accent/20">
      <Icon name={name} className="h-3 w-3 sm:h-4 sm:w-4 fill-accent" />
      <span className="text-xs text-accent">{badges[name].label}</span>
    </div>
  );
};

export default Badge;
