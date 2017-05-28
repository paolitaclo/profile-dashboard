import React, { Component } from 'react';
import './profile_detail.css';

const ProfileDetail = ({ user, description, imageUrl }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <img src={imageUrl} alt="Personal pic">
          </img>
          <div>
            <h3>{user}</h3>
          </div>
          <div>
            <h4>About myself</h4>
            <p>{description}</p>
            {/* <button type="button" className="btn btn-primary">Edit</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail;
