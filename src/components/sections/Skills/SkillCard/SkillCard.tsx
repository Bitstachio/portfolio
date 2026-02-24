import { TIconName } from "@/assets/icons";
import SkillBadge from "../SkillBadge/SkillBadge";

type TSkillCardProps = {
  title: string;
  iconNames: TIconName[];
};

const SkillCard = ({ title, iconNames }: TSkillCardProps) => (
  <article>
    <h3 className="mb-5 text-lg font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {iconNames.map((name) => (
        <SkillBadge key={name} name={name} />
      ))}
    </div>
  </article>
);

export default SkillCard;
