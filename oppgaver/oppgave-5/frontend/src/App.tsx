import Grid from "./components/Grid"
import Total from "./components/Total";
import type { Student } from "./types"
import { useState } from "react";

const initialStudent = [
  {
      id: "123",
      name: "Marius"
  },
  {
      id: "321",
      name: "Hannah"
  },
  {
      id: "231",
      name: "Geir"
  },
]

function App() {

  const [students, setStudents] = useState<Student[]>(initialStudent ?? []);

  const onAddStudent = (student: { name: string }) => {
		setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
	};

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id))
  }

  return (
    <>
    <main>
      <Grid 
      students={students} 
      onAddStudent={onAddStudent} 
      onRemoveStudent={onRemoveStudent}
      />
      <Total total={students.length} />
    </main>
    </>
  ) 
}

export default App


