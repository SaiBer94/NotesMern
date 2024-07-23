// ProfileInfo.jsx
import React from 'react';
import { getInitials } from '../../Utils/helper';
import './ProfileInfo.css'; // Import the CSS

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="profile-info-container">
      <div className="profile-initials">
        {getInitials("John Doe")}
      </div>
      <div className="profile-info-details">
        <p>Name</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
