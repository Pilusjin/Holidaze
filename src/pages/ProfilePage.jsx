
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
            <h2>{profile.username}</h2>
            <p>Email: {profile.email}</p>
          </ProfileInfo>
        ) : (
          <p>Loading...</p>
        )}
      </ProfileContainer>
    </Layout>
  );
};

export default ProfilePage;
