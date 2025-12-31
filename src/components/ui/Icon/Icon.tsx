import { icons, TIconName } from "@/assets/icons";

type TIconProps = {
  name: TIconName;
  className?: string;
};

const Icon = ({ name, className }: TIconProps) => {
  const Svg = icons[name].svg;
  return <Svg name={name} className={className} />;
};

export default Icon;
