import React from 'react';
import Showdown from 'showdown'


const NoteDisplay = () => {
  const converter = new Showdown.Converter()
  //const content = converter.makeHtml(markdown)
  return (<>
    <div className="note-display"></div>
  </>)
}

export default NoteDisplay