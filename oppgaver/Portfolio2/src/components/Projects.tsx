import Project from "./Project"

type Project = {
    title: string
    description: string
  }

  export default function Projects() {
    const projects: Project[] = [
      { title: 'Portfolio Website', description: 'A personal portfolio to showcase my projects.' },
      { title: 'E-commerce Platform', description: 'An online store for selling products.' },
      { title: 'Blog Platform', description: 'A blog platform for sharing articles.' },
      { title: 'Social Media App', description: 'A social media app to connect with friends.' },
    ];
  
    return (
      <>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </>
    );
  }