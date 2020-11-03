import React from "react";

const CreateArea = ({ onAdd }) => {
    
    const [note, setNote] = React.useState({
        title: "",
        content: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((pervNote) => {
            return {
                ...pervNote,
                [name]: value,
            };
        });
    };

    const addNote = (event) => {
        onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    };

    return (
        <div>
            <form>
                <input
                    name="title"
                    value={note.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    value={note.content}
                    placeholder="Add a note"
                    rows="3"
                    onChange={handleChange}
                />
                <button onClick={addNote}>Add</button>
            </form>
        </div>
    );
};

export default CreateArea;
