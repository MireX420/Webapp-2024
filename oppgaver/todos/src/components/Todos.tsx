import Todo from "./Todo";

export default function Todos({data, onRemoveStudent}: any) {

   
    return(
        <>
         <section id="content-section">
            {data.length > 0 ? (
             data.map((todo, index) => (
            <Todo 
              key={index} 
              title={todo.title} 
              content={todo.content} 
              onRemoveStudent={onRemoveStudent}
            />
          ))
        ) : (
          <p>No todos available</p>
        )}
           
         </section>
        </>
    )
}
