import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"


const Note = ({ id, title, content , onDelete}) => {

    const passIndex= () =>{
        onDelete(id);
    }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={passIndex}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
