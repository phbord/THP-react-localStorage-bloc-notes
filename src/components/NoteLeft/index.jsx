import React from "react";
import Showdown from "showdown";

const NoteLeft = ({ title, text }) => {
  console.log(title, text)
  const converter = new Showdown.Converter();
  const textContent = converter.makeHtml(text);
  const createMarkup = (toConv) => {
    return { __html: toConv };
  };

  return (
    <>
      <li className="note-left">
        <h1>{title}</h1>
        <div
          className="text"
          dangerouslySetInnerHTML={createMarkup(textContent)}
        />
      </li>
    </>
  );
};

export default NoteLeft;
