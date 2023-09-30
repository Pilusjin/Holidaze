import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

export const InputField = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

export const RegisterButton = styled(Link)`
  text-align: center;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5em;
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const RegisterForm = styled.form`
  background: #fff;
  padding: 3em;
  border-radius: 8px;
  box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.button`
  background: blue;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;
