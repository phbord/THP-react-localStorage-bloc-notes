import React from 'react';
import 'bootstrap';
import NoteList from 'components/NoteList';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

import './assets/scss/index.scss';


function App() {

  const local = () => {
    let output = []
    const savedNotes = Object.keys(localStorage).filter(x => {
      return x.includes('_note_')
    })
    savedNotes.map(x => output.push(JSON.parse(localStorage[x])))
    return output
  }

  const [state, setState] = React.useState({}) //configuration du localstorage
  const [storage, setStorage ] = React.useState(local())

  //nouvelle note
  const newNote = (title, text) => {
    setState({title: title, text: text})
  }

  return (<>
    <div className="App">
      <header className="note-header">
        <div className="note-btn">
          <button type="button" 
                  className="btn btn-danger w-100">Ajouter une note</button>
        </div>
        <nav className="note-nav">
          <NoteList notes={storage} setNew={newNote} />
        </nav>
      </header>
      <section className="note-wrapper">
        <div className="container">
          <NoteDisplay title={state.title} text={state.text}/>
          <MarkdownInput newNote={newNote} />
        </div>
      </section>
    </div>
  </>);
}

export default App;