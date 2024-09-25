type Cardprops = {
    title?: string
    description?: string
}

export default function Card(props: Cardprops){
    
    return <article>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </article>
}