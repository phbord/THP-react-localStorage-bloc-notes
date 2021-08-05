import React from 'react';
import 'bootstrap';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

import './assets/scss/index.scss';


function App() {
  const [data, setData] = React.useState({})

  const handleSave = (title, text) => {
    setData({title: title, text: text})
    console.log(typeof localStorage.getItem(title), '/', data)
    storeData(data)
  }

  const storeData = (storage) => {
    if (!localStorage.getItem(storage.title)) {
      localStorage.setItem(storage.title, JSON.stringify(storage))
    } else {
      localStorage.title = JSON.stringify(data)
    }
  }

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
          <NoteDisplay />
          <MarkdownInput handleSave={handleSave} />
        </div>
      </section>
    </div>
  </>);
}

export default App;
