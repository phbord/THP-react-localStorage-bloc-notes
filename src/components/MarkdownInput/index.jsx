import React from 'react';


const MarkdownInput = () => {
  const [title, setTitle] = React.useState('')
  const [text, setText] = React.useState('')

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (<>
    <form className="note-form mt-5">
      <div className="mb-3">
        <input type="text" 
                value={title} 
                onChange={onTitleChange}
                className="form-control" 
                id="titleInput" 
                placeholder="Ma première note"/>
      </div>
      <div className="mb-3">
        <textarea className="form-control" 
                  onChange={onTextChange} 
                  id="descTextarea">{text}</textarea>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-danger">Sauvegarder</button>
      </div>
    </form>
  </>)
}

export default MarkdownInput