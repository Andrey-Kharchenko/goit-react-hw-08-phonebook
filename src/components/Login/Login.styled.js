import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const FormContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #1b491d, #33a037);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #656565;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
  outline: none;
  border-color: #45a049; 
  box-shadow: 0px 0px 10px rgba(42, 245, 152, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
  background-color: #45a049;
  transition: background-color 0.3s ease;
  }
`;

export const NotMemberText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #656565;
`;

export const SignUpLink = styled(NavLink)`
  text-decoration: none;
  color: #45a049;
  font-weight: bold;
`;

