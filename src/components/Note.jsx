import React from "react";

const Note = ({ id, title, content , onDelete}) => {

    const passIndex= () =>{
        onDelete(id);
    }
  return (
    <div className="note" id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={passIndex}>DELETE</button>
    </div>
  );
};

export default Note;
