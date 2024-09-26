import './App.css'
import Header from './components/Header' 
import Experiences from './components/Experiences' 
import Contact from './components/Contact' 
import Projects from './components/Projects'

function App() {

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
          <Projects />
          <Contact student={student} />
      </main>
  );
}


export default App