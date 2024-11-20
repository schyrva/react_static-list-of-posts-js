import React from 'react';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
