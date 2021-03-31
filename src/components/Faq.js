import React from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import { info } from '../utils/info';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

function Faq() {
  return (
    <FaqLayout>
      <h2>Обо мне</h2>
      <AnimateSharedLayout>
        {info.map(({title, discription}) =>
          <Toggle key={title} title={title}>
            <div className='answer'>
              <p>{discription}</p>
            </div>
          </Toggle>
        )}
      </AnimateSharedLayout>
    </FaqLayout>
  );
}

const FaqLayout = styled(Layout)`
  margin-top: 0;
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  h4 {
    font-weight: normal;
  }
  .line {
    background: #cccccc;
    height: 0.2rem;
    margin: 0.8rem 0rem;
    width: 100%;
  }
  @media screen and (max-width: 1180px) {
    h4 {
      padding: 1rem 0rem;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 15px;
    }
  }
`;

export default Faq;