import Badge from "../Badge/Badge";
import { TBadgeName } from "../Badge/Badge.types";

type TBadgesProps = {
  names: TBadgeName[];
};

const Badges = ({ names }: TBadgesProps) => (
  <div className="flex flex-wrap gap-2 pt-5">
    {names.map((name) => (
      <Badge key={name} name={name} />
    ))}
  </div>
);

export default Badges;
