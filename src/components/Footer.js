import React from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import { GitHub } from './icons/GitHub';
import { FaceBook } from './icons/FaceBook';
import { Footerq } from '../styles';


function Footer() {
  return (
    <FooterLayout>
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
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 400;
    font-size: 22px;
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
`;

export default Footer;