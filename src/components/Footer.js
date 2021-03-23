import React from 'react';
import styled from 'styled-components';
import { GitHub } from './icons/GitHub';
import { FaceBook } from './icons/FaceBook';


function Footer({theme}) {
  return (
    <FooterLayout style={{ background: `${theme}` }}>
      <p>&copy; 2021 Yulia Ivanova</p>
      <div>
        <a href='https://github.com/yuliaiv-iv'><GitHub /></a>
        <a href='https://github.com/yuliaiv-iv'><FaceBook /></a>
      </div>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  min-height: 8vh;
  max-width: 1440px;
  margin: auto;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 400;
    font-size: 18px;
    color: #545454;
    padding: 0;
  }
  svg {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  path {
    fill: #545454;
  }
  div {
    display: flex;
    width: 100px;
    justify-content: space-between;
  }
  @media screen and (max-width: 1090px) {
    padding: 0rem 2rem;
    svg {
      width: 25px;
      height: 25px;
    }
    div {
      width: 70px;
    }
  }
`;

export default Footer;