import styled from '@emotion/styled'

export const WelcomeContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-around;
    align-items: baseline;
    gap: 40px;
    text-align: center;
    margin: 20px;
    span {
        color: transparent;
        font-size: 20px; 
        font-weight: bold; 
        background: linear-gradient(90deg, #45a049, #4caf50);
        -webkit-background-clip: text;
        background-clip: text;
        display: inline;
    }
    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
    button {
        background-color: #4caf50;
        color: #FFFFFF;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
        button:hover {
        background-color: #45a049;
        transition: background-color 0.3s ease;
    }
`;