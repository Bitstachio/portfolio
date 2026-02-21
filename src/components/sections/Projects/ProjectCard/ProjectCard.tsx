import { TIconName } from "@/assets/icons";
import Badges from "@/components/ui/Badges/Badges";
import Card from "@/components/ui/Card/Card";
import Image from "next/image";

type TProjectCardProps = {
  name: string;
  description: string;
  url: string;
  imgSrc: string;
  badgeNames: TIconName[];
};

const ProjectCard = ({ name, description, url, imgSrc, badgeNames }: TProjectCardProps) => (
  <Card url={url} ariaLabel={name}>
    <div className="flex gap-5">
      <div className="w-36 flex-shrink-0">
        <Image
          src={imgSrc}
          alt={`${name} image`}
          width={132}
          height={76}
          className="duration-standard rounded border border-slate-700 group-hover:border-slate-500"
        />
      </div>
      <div>
        <h3 className="text-strong group-hover:text-accent duration-standard font-bold">{name}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <Badges names={badgeNames} />
      </div>
    </div>
  </Card>
);

export default ProjectCard;
