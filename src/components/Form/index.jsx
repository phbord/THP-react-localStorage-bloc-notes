import React from 'react';


const Form = () => {
    return (<>
      <form className="note-form mt-5">
        <div className="mb-3">
          <input type="text" 
                  className="form-control" 
                  id="titleInput" 
                  placeholder="Ma première note"/>
        </div>
        <div className="mb-3">
          <textarea className="form-control" 
                    id="descTextarea"></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-danger">Sauvegarder</button>
        </div>
      </form>
    </>)
}

export default Form