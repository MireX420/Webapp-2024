import './App.css'
import Header from './components/Header' 
import Experiences from './components/Experiences' 
import Contact from './components/Contact' 
import Projects from './components/Projects'


function App() {
  const student = 'Halgeir Geirson'
  const degree = 'Bachelor IT'
  const points = 180
  const experienceOne = 'Figma UI for customer X'
  const experienceTwo = 'Website for customer Y'
  const email = 'student@hiof.no'

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} />
      <Projects />
      <Contact email={email} />
    </div>
  )
}


export default App