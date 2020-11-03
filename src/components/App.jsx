

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    const pushNote = (newNote) => {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };



    const deleteNote = (id) => {
        console.log(id);
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={pushNote} />
            {notes.map((noteItem, index) => (
               
                <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content} 
                onDelete={deleteNote} />
            ))}
            <Footer />
        </div>
    );
}

export default App;
