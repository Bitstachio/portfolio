import { dateFormatter } from "@/utils/date";

type TExperienceCardProps = {
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  url: string;
};

const ExperienceCard = ({ title, company, description, startDate, endDate, url }: TExperienceCardProps) => (
  <article className="relative mx-auto max-w-3xl">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10"
      aria-label={`${title} at ${company}`}
    />

    <div className="flex gap-6">
      <div className="w-42 flex-shrink-0">
        <p>
          {dateFormatter.format(startDate)} &ndash; {dateFormatter.format(endDate)}
        </p>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{description}</p>
      </div>
    </div>
  </article>
);

export default ExperienceCard;
