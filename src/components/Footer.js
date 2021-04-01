import React from 'react';
import styled from 'styled-components';
import { GitHub } from './icons/GitHub';
import { FaceBook } from './icons/FaceBook';
import { externalLinks } from '../utils/info';

function Footer({ theme }) {
  return (
    <FooterLayout style={{ background: `${theme}` }}>
      <div className='container'>
        <p>&copy; 2021 Yulia Ivanova</p>
        <div>
          <a
            href={externalLinks.gitHub}
            target='_blank'
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href={externalLinks.faceBook}
            target='_blank'
            rel="noreferrer"
          >
            <FaceBook />
          </a>
        </div>
      </div>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  min-height: 8vh;
  .container {
    max-width: 1440px;
    margin: auto;
    padding: 2rem 5rem;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    color: #545454;
    padding: 0;
  }
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  path {
    fill: #545454;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  a {
    margin-left: 2rem;
  }
  @media screen and (max-width: 1180px) {
    padding: 0rem 2rem;
    svg {
      width: 25px;
      height: 25px;
    }
    .container {
      padding: 2rem 0rem;
    }
  }
  @media screen and (max-width: 700px) {
    .container {
      padding: 1rem 0rem;
    }
    a {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0rem 1rem;
    svg {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default Footer;