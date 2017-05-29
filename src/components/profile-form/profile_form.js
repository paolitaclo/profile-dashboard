import React from 'react';

const ProfileForm = ({ onSubmit, onChange, loggedUser }) => {
  let user, description, imageUrl;
  function onUserChange(event) {
    user = event.target.value;
  }
  function onDescriptionChange(event) {
    description = event.target.value;
  }
  function onImageUrlChange(event) {
    imageUrl = event.target.value;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="form-horizontal" onSubmit={e => onSubmit(e, user, description, imageUrl)}>
            <div className="form-group">
              <label htmlFor="nameInput" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="nameInput" placeholder="Name" onChange={onUserChange} defaultValue={loggedUser.user} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="imgUrlInput" className="col-sm-2 control-label">Image Url</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="imgUrlInput" placeholder="Name" onChange={onImageUrlChange} defaultValue={loggedUser.imageurl}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Describe yourself</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="10" cols="82" onChange={onDescriptionChange} defaultValue={loggedUser.description}></textarea>
              </div>
            </div>
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
