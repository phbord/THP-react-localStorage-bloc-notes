import React from 'react';
import Showdown from 'showdown';


const NoteDisplay = ({title, text}) => {
  const converter = new Showdown.Converter();
  const titleContent = converter.makeHtml(title);
  const textContent = converter.makeHtml(text);
  const createMarkup = (toConv) => {
    return {__html: toConv};
  };
    return (<>
      <div className="note-display">
        <div className="title" dangerouslySetInnerHTML={createMarkup(titleContent)}/>
        <div className="text" dangerouslySetInnerHTML={createMarkup(textContent)}/>
      </div>
    </>)
}

export default NoteDisplay