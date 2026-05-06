import CardContainer from "@/components/ui/CardContainer/CardContainer";
import { basePath } from "@/utils/path";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./Projects.constants";

const Projects = () => {
  const t = useTranslations("projects");

  return (
    <CardContainer id="projects">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={t(`items.${project.id}.name`)}
          description={t(`items.${project.id}.description`)}
          url={project.url}
          imgSrc={`${basePath}/projects/${project.fileName}.png`}
          badgeNames={project.badgeNames}
        />
      ))}
    </CardContainer>
  );
};

export default Projects;
