import { icons, TIconName } from "@/assets/icons";
import Icon from "@/components/ui/Icon/Icon";

type TSkillBadgeProps = {
  name: TIconName;
};

const SkillBadge = ({ name }: TSkillBadgeProps) => (
  <div className="flex w-32 flex-col items-center gap-3 rounded-lg border-t border-slate-500/20 bg-white/2 p-3 transition-all">
    {/* TODO: Set appropriate dimensions for mobile devicse */}
    <Icon name={name} className="fill-accent h-16 w-16 sm:h-16 sm:w-16" />
    <p className="text-center text-sm">{icons[name].label}</p>
  </div>
);

export default SkillBadge;
