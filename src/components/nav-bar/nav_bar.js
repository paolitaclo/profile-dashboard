import React from 'react';

const Navbar = ({ loggedUser, setPage }) => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Home</a>
          <button type="button" className="btn btn-default navbar-btn navbar-right" onClick={() => {
            console.log('button');
            setPage(loggedUser ? 'edit' : 'login');
          }}>{loggedUser ? loggedUser.user : 'Log in'}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
