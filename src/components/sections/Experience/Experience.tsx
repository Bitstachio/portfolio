import CardContainer from "@/components/ui/CardContainer/CardContainer";
import { experiences } from "./Experience.constants";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => (
  <CardContainer id="experience">
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
  </CardContainer>
);

export default Experience;
