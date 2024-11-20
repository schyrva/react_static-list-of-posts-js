import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <div className="UserInfo">User information is not available</div>;
  }

  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
