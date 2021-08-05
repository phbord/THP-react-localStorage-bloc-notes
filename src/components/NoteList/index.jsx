import React from 'react';
import NoteLeft from 'components/NoteLeft';


const NoteList = ({notes, setNew}) => {

  const newNote = (title, text) => {
    setNew(title, text);
  }

  return (<>
    <ul>
      {notes.map((note, index) => <NoteLeft key={index.toString()} clicked={newNote} title={note.title} text={note.text} />)}
    </ul>
  </>)
}

export default NoteList