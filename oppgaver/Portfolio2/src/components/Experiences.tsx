import Experience from './Experience';

export default function Experiences({ experiences }: { experiences: Array<{ name: string }> }) {
  return (
    <div>
      {experiences.map((exp, index) => (
        <Experience key={index}>
          {exp.name}
        </Experience>
      ))}
    </div>
  );
}
  