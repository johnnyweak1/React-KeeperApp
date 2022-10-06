import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesContent, setNotes] = React.useState([])
  const [generatedNotes, generateNotes] = React.useState([])




  function addNote(note)
  {
    setNotes((prevValue) => {
      return [...prevValue, note]
    })
    
  }

  function deleteNote(id)
  {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
          return index !== id;
      })
    })
    console.log(notesContent)
  }
    

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <ul>
      {notesContent.map((item, index) => (<Note key={index} id={index} title={item.title} content={item.body} onDelete={deleteNote}/>))}
      </ul>
      
      <Footer />
    </div>
  );
}

export default App;