import { TIconName } from "@/assets/icons";
import Badges from "@/components/ui/Badges/Badges";
import Card from "@/components/ui/Card/Card";
import { dateFormatter } from "@/utils/date";

type TExperienceCardProps = {
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  url: string;
  badgeNames: TIconName[];
};

const ExperienceCard = ({ title, company, description, startDate, endDate, url, badgeNames }: TExperienceCardProps) => (
  <Card url={url} ariaLabel={`${title} at ${company}`}>
    <div className="flex gap-5">
      <div className="w-36 flex-shrink-0">
        <p className="text-muted text-xs font-semibold">
          {dateFormatter.format(startDate)} &ndash; {endDate ? dateFormatter.format(endDate) : "Present"}
        </p>
      </div>
      <div>
        <h3 className="text-strong group-hover:text-accent duration-standard font-bold">{title}</h3>
        <p className="text-muted font-semibold">{company}</p>
        <p className="mt-2 text-sm">{description}</p>
        <Badges names={badgeNames} />
      </div>
    </div>
  </Card>
);

export default ExperienceCard;
