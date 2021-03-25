import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, lineAnimation } from '../animation';
import { contacts } from '../utils/info';

const Contact = () => {
  return (
    <ContactLayout
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Container>
        <div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Контакты</motion.h2>
          </Hide>
        </div>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <div>
          {contacts.map((c) =>
            <Hide key={c.text}>
              <Social variants={titleAnimation}>
                <a href={c.link}>
                  <div>{c.icon}</div>
                </a>
                <h4>{c.text}</h4>
              </Social>
            </Hide>
          )}
        </div>
      </Container>
    </ContactLayout>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

const ContactLayout = styled(motion.div)`
    color: #353535;
    min-height: 100vh;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-top: 80px;
  padding: 0rem 5rem;
  @media screen and (max-width: 1090px) {
    padding: 2rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h4 {
    margin: 1rem;
    font-weight: normal;
  }
  svg {
    width: 40px;
    height: 40px;
  }
  path {
    fill: #353535;
  }
  .hhru {
    fill: #ffffff;
  }
`;

export default Contact;