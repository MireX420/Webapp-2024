import Experience from './Experience';

type ExperiencesProps = {
  experiences: { name: string }[];
};

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div>
      {experiences.length === 0 ? (  // Betingelse for tom liste
        <p>Ingen erfaringer</p>
      ) : (
        experiences.map((exp, index) => (
          <Experience key={index}>{exp.name}</Experience>
        ))
      )}
    </div>
  );
}
