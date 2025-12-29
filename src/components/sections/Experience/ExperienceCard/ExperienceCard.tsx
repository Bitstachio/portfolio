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
  <article
    className="
      group relative mx-auto max-w-3xl p-5 rounded-lg transition-all duration-300 hover:bg-white/2
      border-t border-transparent hover:border-slate-500/20
    "
  >
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10"
      aria-label={`${title} at ${company}`}
    />

    <div className="flex gap-6">
      <div className="w-42 flex-shrink-0">
        <p className="text-xs text-subtle font-semibold">
          {dateFormatter.format(startDate)} &ndash; {endDate ? dateFormatter.format(endDate) : "Present"}
        </p>
      </div>

      <div>
        <h3 className="group-hover:text-accent duration-300 font-bold">{title}</h3>
        <p className="text-subtle font-semibold">{company}</p>
        <p className="text-muted mt-2">{description}</p>
      </div>
    </div>
  </article>
);

export default ExperienceCard;
