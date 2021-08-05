import React from 'react';


const MarkdownInput = ({newNote}) => {

  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const onTextChange = (e) => {
    setText(e.target.value);
  }

  const printClick = (e) => {
    e.preventDefault()
    newNote(text)
  }

  return (<>
    <form className="note-form mt-5">
      <div className="mb-3">
        <input type="text" 
                className="form-control" 
                id="titleInput" 
                placeholder="Ma première note"
                value={title}
                onChange={onTitleChange}/>
      </div>
      <div className="mb-3">
        <textarea className="form-control" 
                  id="descTextarea"
                  value={text}
                  onChange={onTextChange}></textarea>
      </div>
      <div className="mb-3">
        <button onClick={printClick} type="submit" className="btn btn-danger">Sauvegarder</button>
      </div>
    </form>
  </>)
}

export default MarkdownInput