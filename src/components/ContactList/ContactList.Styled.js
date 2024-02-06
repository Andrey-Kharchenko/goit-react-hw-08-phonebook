import styled from '@emotion/styled';

export const ContactListContainer = styled.div`
  text-align: center;
  margin: 20px;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button {
      background-color: #4caf50;
      color: #FFFFFF;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
    background-color: #45a049;
    }
  }
`;