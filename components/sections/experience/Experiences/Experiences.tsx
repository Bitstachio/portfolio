import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experiences } from "./Experiences.constants";

const Experiences = () => (
  <section>
    {experiences.map((experience) => (
      <ExperienceCard
        key={experience.id}
        title={experience.title}
        company={experience.company.name}
        description={experience.description}
        startDate={experience.startDate}
        endDate={experience.endDate}
        url={experience.company.url}
      />
    ))}
  </section>
);

export default Experiences;
