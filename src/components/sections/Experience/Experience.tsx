import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { experiences } from "./Experience.constants";

const Experience = () => (
  <section id="experience" className="scroll-mt-16">
    {experiences.map((experience) => (
      <ExperienceCard
        key={experience.id}
        title={experience.title}
        company={experience.company.name}
        description={experience.description}
        startDate={experience.startDate}
        endDate={experience.endDate}
        url={experience.company.url}
        badgeNames={experience.badgeNames}
      />
    ))}
  </section>
);

export default Experience;
