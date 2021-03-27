import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;      
  }
  button {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.8rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    border-radius: 8px;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 2.5rem;
  }
  h3 {
    color: white;
  }
  p {
    padding: 2rem 0rem;
    color: #cccccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  h4 {
    font-size: 1.5rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #fff;
  }
  @media screen and (max-width: 1180px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
      padding: 1.5rem 0rem;
    }
    h4 {
      font-size: 1.3rem;
    }
    a {
      text-decoration: none;
      font-size: 1rem;
    }
    button {
      font-size: 1.1rem;
      padding: 0.6rem 1rem;
    }
  }
`;

export default GlobalStyle;
