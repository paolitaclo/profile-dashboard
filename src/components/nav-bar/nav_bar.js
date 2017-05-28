import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Home</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
