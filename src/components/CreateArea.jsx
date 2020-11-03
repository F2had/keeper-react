import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
const CreateArea = ({ onAdd }) => {
  const [isExpanded, setExpanded] = React.useState(false);

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
      content: "",
    });
    event.preventDefault();
    setExpanded(false);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        ) }
        <textarea
          name="content"
          value={note.content}
          placeholder="Add a note"
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          onClick={() => {
            setExpanded(true);
          }}
        />
       
          <Zoom in={isExpanded}>
            <Fab onClick={addNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        
      </form>
    </div>
  );
};

export default CreateArea;
