import Project from './Project';

type ProjectType = {
  title: string;
  description: string;
  category: string;
};

type ProjectsProps = {
  projects: ProjectType[];
  removeProject: (index: number) => void;
};

export default function Projects({ projects, removeProject }: ProjectsProps) {
  // Bruk `reduce` til å gruppere prosjekter etter kategori og telle antall i hver kategori
  const projectCountByCategory = projects.reduce((acc: { [key: string]: number }, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      {/* Vise totalen per kategori */}
      <h3>Prosjektantall per kategori:</h3>
      {Object.entries(projectCountByCategory).map(([category, count]) => (
        <p key={category}>
          <strong>{category}</strong>: {count} prosjekter
        </p>
      ))}

      {projects.length === 0 ? (
        <p>Ingen prosjekter</p>
      ) : (
        projects.map((project, index) => (
          <div key={index}>
            <Project title={project.title} description={project.description} />
            <p>Kategori: {project.category}</p>
            <button onClick={() => removeProject(index)}>Fjern</button>
          </div>
        ))
      )}
    </div>
  );
}
