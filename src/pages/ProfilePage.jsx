import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { apiUrl } from '../api/constants';
import { Avatar, ProfileContainer, ProfileInfo } from '../styledComponents/Profile';
import { save } from '../api/storage';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [newAvatarInput, setNewAvatarInput] = useState("");
  const token = localStorage.getItem("token");

  const handleUpdateAvatar = async (event) => {
    event.preventDefault();
    const updateAvatarData = { avatar: newAvatarInput };

    try {
      const response = await fetch(`${apiUrl}holidaze/profiles/${profile.name}/media`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updateAvatarData),
      });

      if (response.ok) {
        const updatedProfile = { ...profile, avatar: newAvatarInput };
        setProfile(updatedProfile);
        save('profile', updatedProfile);
        console.log('Update successful:', updatedProfile);
      } else {
        const errorData = await response.json();
        console.error('Update failed:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <Avatar
              src={profile.avatar || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"}
              alt="User Avatar"
            />
            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
          </ProfileInfo>
        ) : (
          <p>No profile information available.</p>
        )}
      </ProfileContainer>

      <h2>Update Avatar</h2>
      <input
        type="text"
        placeholder="New Avatar URL"
        value={newAvatarInput}
        onChange={(e) => setNewAvatarInput(e.target.value)}
      />
      <button onClick={handleUpdateAvatar}>Update Avatar</button>
    </Layout>
  );
};

export default ProfilePage;

