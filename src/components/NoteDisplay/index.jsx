import React from 'react';
import Showdown from 'showdown';


const NoteDisplay = ({markdown}) => {
  const converter = new Showdown.Converter();
  const content = converter.makeHtml(markdown);
  const createMarkup = (toConv) => {
    return {__html: toConv};
  };
    return (<>
      <div className="note-display" dangerouslySetInnerHTML={createMarkup(content)} />
    </>)
}

export default NoteDisplay