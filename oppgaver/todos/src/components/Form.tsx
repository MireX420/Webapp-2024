import { useState } from "react";

type FormProps = {
  setData: React.Dispatch<React.SetStateAction<{ title: string; content: string }[]>>;
}

export default function Form({setData}: FormProps) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
 
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent form submission if title is empty
    if (!title) return;

    // Add new data to the array
    setData((prevData) => [...prevData, { title, content }]);

    // Clear form inputs
    setTitle('');
    setContent('');
  };

  return(
        <>
        <section id="form-section">
          <form onSubmit={handleSubmit} id="form-section-form">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Update title state
            />
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)} // Update content state
            />
            <button type="submit">Add</button>
          </form>
        </section>
        </>
    )
}