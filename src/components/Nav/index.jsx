import React from 'react';


const Nav = () => {
    return (<>
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
    </>)
}

export default Nav