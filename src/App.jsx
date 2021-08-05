import React from 'react';
import 'bootstrap';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

import './assets/scss/index.scss';


function App() {

  const [state, setState] = React.useState({});

  const newNote = (title, text) => {
    setState({title: title, text: text});
  }

  console.log(state)

  return (<>
    <div className="App">
      <header className="note-header">
        <div className="note-btn">
          <button type="button" 
                  className="btn btn-danger w-100">Ajouter une note</button>
        </div>
        <nav className="note-nav">
          <ul>
            <li>
                <a href="#">
                  <h1></h1>
                  <p></p>
                </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="note-wrapper">
        <div className="container">
          <NoteDisplay title={state.title} text={state.text}/>
          <MarkdownInput newNote={newNote}/>
        </div>
      </section>
    </div>
  </>);
}

export default App;
