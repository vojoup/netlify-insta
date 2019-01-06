import React from 'react';
import { logout, getUser } from '../services/auth';
import { navigate } from 'gatsby';

const handleSubmit = () => logout(user => navigate(`/app/login`));

const Profile = () => {
  const user = getUser();
  console.log(user);
  return (
    <>
      <h2>Your profile</h2>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
      <button onClick={handleSubmit}>Log out</button>
    </>
  );
};

export default Profile;
