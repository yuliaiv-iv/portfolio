import React, { useState } from 'react';
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
        {info.map((i) =>
          <Toggle title={i.title}>
            <div className='answer'>
              <p>{i.discription}</p>
            </div>
          </Toggle>
        )}
      </AnimateSharedLayout>
    </FaqLayout>
  );
}

const FaqLayout = styled(Layout)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;