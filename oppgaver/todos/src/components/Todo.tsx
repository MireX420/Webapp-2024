
export default function Todo({title, content, onRemoveStudent}: any) {

    return(
        <>
         <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={() => onRemoveStudent(title)}>Complete</button>
          </article>
        </>
    )      
}