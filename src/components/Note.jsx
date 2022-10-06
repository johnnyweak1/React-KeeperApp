import React from "react";
import {Delete} from '@material-ui/icons';

function Note(props) {
  
  function noteToDelete(event)
  {
    event.preventDefault()
    props.onDelete(props.id)

  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={noteToDelete}>
      <Delete/>
      </button>
      
    </div>
  );
}

export default Note;