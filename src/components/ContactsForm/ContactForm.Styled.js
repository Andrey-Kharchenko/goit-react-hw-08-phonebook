import styled from '@emotion/styled';

export const FormContainer = styled.div`
  margin: 20px;
  form {
    h2 {
      font-size: 20px;
      font-weight: 500;
      text-align: start;
      margin-bottom: 10px;
      background: linear-gradient(90deg, #1b491d, #33a037);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

    }
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid #656565;
      border-radius: 3px;
      font-size: 16px;
      transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #45a049; 
        transition: border-color 0.3s ease;
        box-shadow: 0px 0px 10px rgba(42, 245, 152, 0.5);
    }
    }
    button {
      background-color: #4caf50;
      color: #FFFFFF;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
    background-color: #45a049;
    transition: background-color 0.3s ease;
    }
  }
`;