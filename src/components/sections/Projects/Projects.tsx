import CardContainer from "@/components/ui/CardContainer/CardContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./Projects.constants";

const Projects = () => (
  <CardContainer id="projects">
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
        url={project.url}
        imgSrc={`/projects/${project.fileName}.png`}
        badgeNames={project.badgeNames}
      />
    ))}
  </CardContainer>
);

export default Projects;
