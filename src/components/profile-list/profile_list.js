import React from 'react';

import ProfileDetail from '../profile-detail/profile_detail';
import './style.css';

const ProfileList = ({ profiles }) => {
  return (
    <div>
      {profiles.map(userInfo => <ProfileDetail {...userInfo} key={userInfo._id} />)}
    </div>
  );
};

export default ProfileList;
