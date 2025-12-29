import Card from "@/components/ui/Card/Card";
import Image from "next/image";

type TProjectCardProps = {
  name: string;
  description: string;
  url: string;
  imgSrc: string;
};

const ProjectCard = ({ name, description, url, imgSrc }: TProjectCardProps) => (
  <Card url={url} ariaLabel={name}>
    <div className="flex gap-6">
      <div className="w-36 flex-shrink-0">
        <Image
          src={imgSrc}
          alt={`${name} image`}
          width={132}
          height={96}
          className="rounded border duration-300 border-slate-700 group-hover:border-slate-500"
        />
      </div>

      <div>
        <h3 className="group-hover:text-accent duration-300 font-bold">{name}</h3>
        <p className="text-muted mt-2">{description}</p>
      </div>
    </div>
  </Card>
);

export default ProjectCard;
