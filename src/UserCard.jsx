import React from 'react';
import { useSpring, animated } from 'react-spring';

const UserCard = ({ user }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={props} className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name || user.login}</h2>
      <p>Username: {user.login}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </animated.div>
  );
};

export default UserCard;