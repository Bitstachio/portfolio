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
        <p className="text-xs text-subtle font-semibold">
          {dateFormatter.format(startDate)} &ndash; {endDate ? dateFormatter.format(endDate) : "Present"}
        </p>
      </div>
      <div>
        <h3 className="group-hover:text-accent duration-300 font-bold">{title}</h3>
        <p className="text-subtle font-semibold">{company}</p>
        <p className="text-muted mt-2">{description}</p>
        <Badges names={badgeNames} />
      </div>
    </div>
  </Card>
);

export default ExperienceCard;
