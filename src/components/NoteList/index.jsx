import React from 'react';
import NoteLeft from 'components/NoteLeft';


const NoteList = ({notes, setNew}) => {
  console.log(notes)
  const [clicked, setClicked] = React.useState(notes[0])

  const newNote = (title, text) => {
    setClicked({title: title, text: text})
    setNew(title, text);
  }

  return (<>
    <ul>
      {notes.map((note, index) => <NoteLeft key={index.toString()} clicked={newNote} title={note.title} text={note.text} />)}
    </ul>
  </>)
}

export default NoteList