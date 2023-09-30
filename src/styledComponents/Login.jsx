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