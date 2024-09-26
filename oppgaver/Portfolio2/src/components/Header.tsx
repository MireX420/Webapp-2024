export default function Header(props : any) {
    return (
        <>
            <h1>{props.student.name}</h1>
            <p>{props.student.degree}</p> 
            <p>Points: {props.student.points}</p> 
        </>
    );
}