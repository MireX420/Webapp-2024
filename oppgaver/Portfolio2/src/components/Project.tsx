type Project = {
    title: string
    description: string
  }
  
export default function Project({ title, description }: Project) {
        return (
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )
    }
  
  