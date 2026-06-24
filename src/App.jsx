import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  const [notes, setNotes] = useState([]);

  const [currentNote, setCurrentNote] = useState({ title: "", desc: "" });

  useEffect(() => {
    let localNotes = localStorage.getItem("notes");
    if (localNotes) {
      setNotes(JSON.parse(localNotes));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, currentNote]);
    setCurrentNote({ title: "", desc: "" });
    localStorage.setItem("notes", JSON.stringify([...notes, currentNote]));
  };

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
  };

  const deleteNote = (title) => {
    setNotes(notes.filter((item) => item.title !== title));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((item) => item.title !== title)),
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Create A Note 🫂</h1>
          <div>
            <label htmlFor="title">Text ⬇️</label>
            <input
              value={currentNote.title}
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div>
            <label htmlFor="desc">Description ⬇️ </label>
            <textarea
              name="desc"
              id="desc"
              onChange={handleChange}
              value={currentNote.desc}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </main>
      <section className="noteSection">
        <h2>Your Notes Here :</h2>
        <div className="container">
          {notes &&
            notes.map((note) => {
              return (
                <Card
                  title={note.title}
                  desc={note.desc}
                  key={note.title}
                  deleteNote={deleteNote}
                />
              );
            })}
        </div>
        {notes.length == 0 && <div>Add a Note First</div>}
      </section>
    </>
  );
}

export default App;
