import Student from "./Student"
import type { Student as StudentProps } from "./types"
import AddStudentForm from "./AddStudentForm";

type GridProps = {
    students: StudentProps[];
    onAddStudent: ({ name }: { name: string }) => void;
    onRemoveStudent: ( id: string ) => void;
  }

export default function Grid(props: GridProps) {
    const { students, onAddStudent, onRemoveStudent } = props
	
    return(
        <>
        <article className="grid">
            {students.map((student) => (
                    <Student 
                        key={student.id} 
                        id={student.id} 
                        name={student.name} 
                        onRemoveStudent={onRemoveStudent} 
                    />
            ))}
            <AddStudentForm onAddStudent={onAddStudent} />
        </article>
        </>
    )
}