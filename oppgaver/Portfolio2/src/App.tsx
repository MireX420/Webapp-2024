import './App.css';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
import { useState } from 'react';

function App() {
  // Prosjektene våre har nå også en kategori
  const [projects, setProjects] = useState([
    { title: 'Portfolio Website', description: 'A personal portfolio to showcase my projects.', category: 'Web Development' },
    { title: 'E-commerce Platform', description: 'An online store for selling products.', category: 'Web Development' },
    { title: 'Blog Platform', description: 'A blog platform for sharing articles.', category: 'Content Creation' },
    { title: 'Social Media App', description: 'A social media app to connect with friends.', category: 'App Development' },
  ]);

  const addProject = (newProject: { title: string; description: string; category: string }) => {
    setProjects([...projects, newProject]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const student = {
    name: 'Halgeir Geirson',
    degree: 'Bachelor IT',
    points: 180,
    email: 'student@hiof.no',
    experiences: [
      { name: 'Figma UI for customer X' },
      { name: 'Website for customer Y' },
    ],
  };

  return (
    <main>
      <Header student={student} />
      <Experiences experiences={student.experiences} />
      <Projects projects={projects} removeProject={removeProject} /> {/* Send prosjekter */}
      <CreateProject addProject={addProject} /> {/* Legg til nytt prosjekt */}
      <Contact student={student} />
    </main>
  );
}

export default App;
