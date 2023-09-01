import React, { useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { apiUrl } from '../api/constants';



const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const RegisterForm = styled.form`
  background: #fff;
  padding: 3em;
  border-radius: 8px;
  box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background: blue;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [venueManager, setVenueManager] = useState(false);
  
    const handleRegister = async (event) => {
        event.preventDefault();
        
        const registrationData = {
          name: name,
          email: email,
          password: password,
          avatar: avatar,
          venueManager: venueManager,
        };
      
        try {

          const response = await fetch (apiUrl+'holidaze/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Registration successful:', responseData);
          } else {
            const errorData = await response.json();
            console.error('Registration failed:', errorData);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    return (
      <Layout>
        <RegisterContainer>
          <h1>Register</h1>
          <RegisterForm onSubmit={handleRegister}>
            <Label>Username</Label>
            <Input 
              type="text" 
              name="username" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <Label>email</Label>
            <Input 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <Label>Password</Label>
            <Input 
              type="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <Label>Avatar</Label>
            <Input 
                type="url" 
                name="avatar" 
                placeholder="Avatar URL"
                value={avatar} 
                onChange={(e) => setAvatar(e.target.value)} 
            />
            <label>
            <input 
                type="checkbox"
                checked={venueManager}
                onChange={(e) => setVenueManager(e.target.checked)}
            />
            Are you a Venue Manager?
            </label>
            <SubmitButton type="submit">Register</SubmitButton>
          </RegisterForm>
        </RegisterContainer>
      </Layout>
    );
  };
  
  export default RegisterPage;