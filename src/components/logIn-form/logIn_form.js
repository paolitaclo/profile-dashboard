import React from 'react';

const LogInForm = ({ onSubmit, onChange }) => {
  let username;
  function onUserChange(event) {
    username = event.target.value;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="form-group" onSubmit={e => onSubmit(e, username)}>
            <label htmlFor="userNameInput" className="col-sm-2 control-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text" className="form-control" id="userNameInput"
                placeholder="Username" onChange={onUserChange}
              />
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
