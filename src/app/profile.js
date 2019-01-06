import React from 'react';
import { getUser } from '../services/auth';

const Profile = () => {
  const user = getUser();
  return (
    <>
      <h2>Your profile</h2>
      <ul>
        <li>Name: {user.user_metadata && user.user_metadata.full_name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
    </>
  );
};

export default Profile;
