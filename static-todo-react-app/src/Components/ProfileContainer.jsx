import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
  const profiles = [
    {
      name: 'Bruno',
      age: 28,
      bio: 'Web developer passionate about React and UI/UX design.',
    },
    {
      name: 'Amy',
      age: 42,
      bio: 'UX researcher who loves turning data into delightful experiences.',
    },
    {
      name: 'Rashid',
      age: 35,
      bio: 'Frontend engineer exploring animations and accessibility.',
    },
  ];

  return (
    <div>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />
      ))}
    </div>
  );
};

export default ProfileContainer;