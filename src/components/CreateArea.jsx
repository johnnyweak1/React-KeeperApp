import React from "react";
import {Add} from "@material-ui/icons"
import {Fab, Zoom} from "@material-ui/core"

function CreateArea(props) {
  const [note, setNote] = React.useState({title: "", body: ""})
  const [expanded, setExpand] = React.useState(false)


  function handleChange(event)
  {
    const part = event.target;
    const newValue = event.target.value;

    setNote((prevValue) => {
      if (part.name === 'title')
      {
        return({
          title: newValue,
          body: prevValue.body
        })
      }
      else if (part.name === 'content')
      {
        return({
          title: prevValue.title,
          body: newValue
        })
      }
    })
  }

  function addNote(event)
  {
    event.preventDefault()
    props.onAdd(note)
    setNote({title: "", body: ""})
  }

  function handleClick()
  {
    setExpand(true)
  }
  
  return (
    <div>
      <form className="create-note">
        {expanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea 
          onClick={handleClick} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows={expanded? "3" : "1"} 
          value={note.body}

          />
        {expanded && <Zoom in={true}>
        <Fab onClick={addNote}><Add /></Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;