import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Userprofile.css';
import { API } from '../Global';

const UserProfile = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const getUserDetails = () => {
    fetch(`${API}/me`)
      .then(res => res.json())
      .then(data => setUserData(data));
  };

  useEffect(() => {
    getUserDetails();
  }, [userData]);

  const handleLogout = () => {
    fetch(`${API}/logout`);
    alert('Log out successful');
    navigate('/login');
  };

  return (
    <>
      {userData && (
        <div className="user-profile">
          <div className="profile_container">
            <div className="info">
              <h3>Name :</h3>
              <span>{userData?.userDetail?.name}</span>
            </div>
            <div className="info">
              <h3>Email :</h3>
              <span>{userData?.userDetail?.email}</span>
            </div>
            <div className="info">
              <h3>Age :</h3>
              <span>{userData?.userDetail?.age}</span>
            </div>
            <div className="info">
              <h3>Gender :</h3>
              <span>{userData?.userDetail?.gender}</span>
            </div>
            <div className="info">
              <h3>DOB :</h3>
              <span>{userData?.userDetail?.dob}</span>
            </div>
            <div className="info">
              <h3>Mobile :</h3>
              <span>{userData?.userDetail?.mobile}</span>
            </div>
          </div>
          <button id="update" onClick={() => navigate('/me/update')}>
            Update Profile
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
