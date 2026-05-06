import CardContainer from "@/components/ui/CardContainer/CardContainer";
import { useTranslations } from "next-intl";
import { experiences } from "./Experience.constants";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {
  const t = useTranslations("experience");

  return (
    <CardContainer id="experience">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          title={t(`items.${experience.id}.title`)}
          company={experience.company.name}
          description={t(`items.${experience.id}.description`)}
          startDate={experience.startDate}
          endDate={experience.endDate}
          url={experience.company.url}
          badgeNames={experience.badgeNames}
        />
      ))}
    </CardContainer>
  );
};

export default Experience;
