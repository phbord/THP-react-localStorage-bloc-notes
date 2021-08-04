import React from 'react';
import 'bootstrap';
import Nav from 'components/Nav';
import Form from 'components/Form';

import './assets/scss/index.scss';


function App() {
  return (<>
    <div className="App">
      <Nav />
      <section className="note-wrapper">
        <div className="container">
          <div className="note-display"></div>
          <Form />
        </div>
      </section>
    </div>
  </>);
}

export default App;
