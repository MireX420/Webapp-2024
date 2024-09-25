import Card from "./components/Card"
import Title from "./components/Title"

function App() {
  return (
    <section>
      <Title title="Produkter"/>
      <Title title="Medlemstilbud"/>
      <Card title="Medlemstilbud" description="Hei på deg"/>
      <Card title="Tittel" description="beskrivelse"/>
    </section>
  )
}

export default App
