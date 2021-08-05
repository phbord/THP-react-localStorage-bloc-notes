import React from 'react';
import NoteDisplay from 'components/NoteDisplay';


const NoteList = ({notes}) => {
  const [clicked, setClicked] = React.useState(notes[0])

  const newNote = (title, text) => {
    setClicked({title: title, text: text})
  }

  return (<>
    <ul>
      <li>
        <h1></h1>
        <p></p>
      </li>
    </ul>
  </>)
}

export default NoteList