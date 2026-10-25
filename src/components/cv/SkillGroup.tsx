import type { SkillGroupData } from '../../content/cv';

type SkillGroupProps = {
  group: SkillGroupData;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <section className="cv-competency-group">
      <h3>{group.title}</h3>
      <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
