import React from 'react';
import { useTransition, animated } from 'react-spring';
import UserCard from './UserCard';

const UserCardList = ({ users }) => {
  const transitions = useTransition(users, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    keys: user => user.id,
  });

  return (
    <div className="user-card-list">
      {transitions((style, user) => (
        <animated.div style={style}>
          <UserCard user={user} />
        </animated.div>
      ))}
    </div>
  );
};

export default UserCardList;