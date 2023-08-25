import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Avatar = styled.img`
  width: 150px; /* increased size */
  height: 150px; /* increased size */
  border-radius: 50%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <Layout>
      <ProfileContainer>
        <h1>Profile Page</h1>
        {profile ? (
          <ProfileInfo>
            {profile.avatar && <Avatar src={profile.avatar} alt="User Avatar" />}
            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
          </ProfileInfo>
        ) : (
          <p>No profile information available.</p>
        )}
      </ProfileContainer>
    </Layout>
  );
};

export default ProfilePage;
