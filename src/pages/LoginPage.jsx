import { useState } from "react";
import Layout from "../components/layout";
import { login } from "../api/auth";
import {
  InputField,
  LoginContainer,
  LoginForm,
  RegisterButton,
  SubmitButton,
} from "../styledComponents/Login";

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
      await login(loginData);

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
            placeholder="Email"
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
