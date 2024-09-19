export default function Header(props){
    
    return (
        <>
        <h1>{props.student}</h1>
        <p>{props.degree}</p>
        <p>{props.points}</p>
        </>
    )
}