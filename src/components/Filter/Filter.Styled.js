import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  text-align: center;
  margin: 20px;
  label {
    font-size: 18px;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: 1px solid #656565;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
    outline: none;
    border-color: #45a049; 
    box-shadow: 0px 0px 10px rgba(42, 245, 152, 0.5);
    }
  }
`;