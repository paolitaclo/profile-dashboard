import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProfileForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="nameInput" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="nameInput" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="imgUrlInput" className="col-sm-2 control-label">Image Url</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="imgUrlInput" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Describe yourself</label>
              <div className="col-sm-10">
                <textarea class="form-control" rows="10" cols="82"></textarea>
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input type="file" id="exampleInputFile" />
              <p className="help-block">Example block-level help text here.</p>
            </div> */}
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary"> Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ProfileForm;
