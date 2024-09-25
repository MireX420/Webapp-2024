import Experience from './Experience'

export default function Experiences({ experienceOne, experienceTwo } : {experienceOne : string, experienceTwo : string}) {
    return (
      <div>
        <Experience description={experienceOne} />
        <Experience description={experienceTwo} />
      </div>
    )
  }
  