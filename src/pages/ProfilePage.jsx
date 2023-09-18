import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Avatar, ProfileContainer, ProfileInfo } from '../styledComponents/Profile';



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
