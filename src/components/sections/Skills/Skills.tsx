import CardContainer from "@/components/ui/CardContainer/CardContainer";
import SkillCard from "./SkillCard/SkillCard";
import { skills } from "./Skills.constants";

const Skills = () => (
  <CardContainer id="skills">
    {skills.map((skill) => (
      <SkillCard key={skill.id} title={skill.title} iconNames={skill.iconNames} />
    ))}
  </CardContainer>
);

export default Skills;
