import { Award, Building2, Trees, Wrench } from 'lucide-react';

const points = [
  [Award, '15+ years', 'Hands-on swimming pool maintenance experience.'],
  [Building2, 'Nizam Club', 'We have worked at Nizam Club. This describes our work experience only and does not imply an official endorsement.'],
  [Trees, '30+ farmhouse pools', 'Experience across more than 30 farmhouse swimming pools.'],
  [Wrench, 'Practical know-how', 'Working knowledge of what swimming pools need to stay clean and in use.']
];

export default function ExperienceBlock() {
  return (
    <ul className="exp-list">
      {points.map(([Icon, h, t]) => (
        <li key={h}>
          <Icon size={28} aria-hidden="true" />
          <div><h3>{h}</h3><p>{t}</p></div>
        </li>
      ))}
    </ul>
  );
}
