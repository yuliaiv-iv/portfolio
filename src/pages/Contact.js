import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';

import { contacts } from '../utils/info';
import { lineAnimation } from '../animation';

const Contact = () => {
  return (
    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Контакты</motion.h2>
        </Hide>
      </Title>
      <motion.div variants={lineAnimation} className='line'></motion.div>
      <div>
        {contacts.map((c) =>
        <Hide key={c.text}>
          <Social variants={titleAnimation}>
            <div>{c.icon}</div>
            <h2>{c.text}</h2>
          </Social>
        </Hide>
        )}
      </div>
    </ContactStyle>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1rem;
    font-size: 2rem;
  }
  svg {
    width: 40px;
    height: 40px;
  }
  path {
    fill: #353535;
  }
`;

export default Contact;