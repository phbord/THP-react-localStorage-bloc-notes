import React from "react";
import Showdown from "showdown";

const NoteLeft = ({ title, text, clicked }) => {
  const [isClicked, setIsClicked] = React.useState(false)

  const converter = new Showdown.Converter();
  const textContent = converter.makeHtml(text);

  const clickMe = () => {
    setIsClicked(!isClicked);
    clicked(title, text);
  }
  const createMarkup = (toConv) => {
    return { __html: toConv };
  };

  return (
    <>
      <li className="note-left" onClick={clickMe}>
        <h3>{title}</h3>
        <div
          className="text"
          dangerouslySetInnerHTML={createMarkup(textContent)}
        />
      </li>
    </>
  );
};

export default NoteLeft;
