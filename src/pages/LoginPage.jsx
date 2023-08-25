import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import { login } from '../api/auth';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const InputField = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const RegisterButton = styled(Link)`
  text-align: center;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
`;

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      const loginData = {
        email: loginEmail,
        password: loginPassword,
      };
  
      try {
        await login(loginData); // Call the login function from api.js


        console.log("Login successful!"); // Debugging line


        window.location.href = "/";

      } catch (error) {
        console.error("Login failed:", error);
      }
    };
  
    return (
      <Layout>
        <LoginContainer>
          <h1>Login</h1>
          <LoginForm onSubmit={handleLogin}>
            <InputField 
              type="text" 
              placeholder="Username" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
            />
            <InputField 
              type="password" 
              placeholder="Password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
            />
            <SubmitButton type="submit">Login</SubmitButton>
            
          </LoginForm>
<RegisterButton to="/register">Register</RegisterButton>
        </LoginContainer>
      </Layout>
    );
  };
  

export default LoginPage;
