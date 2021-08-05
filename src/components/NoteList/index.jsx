import React from 'react';
import NoteLeft from 'components/NoteLeft';


const NoteList = ({notes}) => {
  console.log(notes)
  // const [clicked, setClicked] = React.useState(notes[0])
  const [noteState, setNoteState] = React.useState(notes)

  // const newNote = (title, text) => {
  //   setClicked({title: title, text: text})
  // }
  const noteArr = noteState.map((note) => {
      <NoteLeft key={note.toString()} title={note.title} text={note.text} />
  })

  return (<>
    <ul>
      {noteState.map((note) => {
        <NoteLeft key={note.toString()} title={note.title} text={note.text} />
      })}
    </ul> 
  </>)
}

export default NoteList