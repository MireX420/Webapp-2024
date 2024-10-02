import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import { useState } from "react";
import "./style/style.css";
import Title from "./components/Title";

// Predefined todos list
const myTodosList = [
  {
    title: "Brette klær",
    content: "bla bla bla"
  },
  {
    title: "Fylle diesel",
    content: "bla bla bla"
  },
  {
    title: "Jobbe med WebApp oppgave",
    content: "bla bla bla"
  },
];

function App() {
  const [data, setData] = useState<{ title: string; content: string }[]>(myTodosList);

  // Function to remove a todo item based on title
  const onRemoveStudent = (title: string) => {
    setData((prev) => prev.filter((data) => data.title !== title));
  };

  return (
    <>
      <Navbar />
      <main>
        <Form setData={setData} />
        <Title />
        <Todos data={data} onRemoveStudent={onRemoveStudent} />
      </main>
    </>
  );
}

export default App;
