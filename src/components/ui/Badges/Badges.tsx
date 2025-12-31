import { TIconName } from "@/assets/icons";
import Badge from "../Badge/Badge";

type TBadgesProps = {
  names: TIconName[];
};

const Badges = ({ names }: TBadgesProps) => (
  <div className="flex flex-wrap gap-2 pt-5">
    {names.map((name) => (
      <Badge key={name} name={name} />
    ))}
  </div>
);

export default Badges;
