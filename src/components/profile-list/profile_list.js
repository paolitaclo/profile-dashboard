import React, { Component } from 'react';

import ProfileDetail from '../profile-detail/profile_detail';
import './style.css';

// export default class ProfileList extends Component {
//   render() {
//     const profiles = this.props.data.map((profile) => {
//       return (
//         <ProfileDetail name={profile.name} key={profile.id}>
//           {profile.description}
//         </ProfileDetail>
//       )
//     })
//     return (
//       <div>
//         <ProfileDetail  />
//       </div>
//     )
//   }
// }

const ProfileList = ({ data }) => {
  return (
    <div>
      {data.map(userInfo => <ProfileDetail {...userInfo} key={userInfo.id} />)}
    </div>
  );
};

export default ProfileList;
