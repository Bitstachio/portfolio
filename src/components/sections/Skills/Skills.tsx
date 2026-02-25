import SkillCard from "./SkillCard/SkillCard";
import { skills } from "./Skills.constants";

const Skills = () => (
  <div id="skills" className="flex scroll-mt-8 flex-col gap-10">
    {skills.map((skill) => (
      <SkillCard key={skill.id} title={skill.title} iconNames={skill.iconNames} />
    ))}
  </div>
);

export default Skills;
