import { icons } from "./Icon.constants";
import { TIconName } from "./Icon.types";

type TIconProps = {
  name: TIconName;
  className?: string;
};

const Icon = ({ name, className }: TIconProps) => {
  const Svg = icons[name];
  return <Svg className={className} />;
};

export default Icon;
