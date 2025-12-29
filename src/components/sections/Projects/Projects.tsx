import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./Projects.constants";

const Projects = () => (
  <section>
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
        url={project.url}
        imgSrc={`/projects/${project.fileName}.png`}
      />
    ))}
  </section>
);

export default Projects;
