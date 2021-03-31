import React from 'react';
import styled from 'styled-components';
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
            <motion.h2 variants={titleAnimation}>
              Контакты
            </motion.h2>
          </Hide>
        </div>
        <motion.div
          variants={lineAnimation}
          className='line'
        >
        </motion.div>
        {contacts.map(({ text, link, icon }) =>
          <a
            href={link}
            target='_blank'
            rel="noreferrer"
          >
            <Hide key={text}>
              <Social variants={titleAnimation}>
                <div>{icon}</div>
                <h4>{text}</h4>
              </Social>
            </Hide>
          </a>
        )}
      </Container>
    </ContactLayout>
  );
};

const ContactLayout = styled(motion.div)`
  color: #353535;
  height: calc(100vh - 80px);
  h2 {
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 769px) {
    height: calc(100vh - 60px);
  }
  @media screen and (max-width: 700px) {
    .line {
      height: 0.3rem;
    }
  }
`;

const Container = styled.div`
  background: rgb(255, 255, 255);
  max-width: 1440px;
  margin: auto;
  margin-top: 80px;
  padding: 0rem 5rem;
  @media screen and (max-width: 1180px) {
    padding: 2rem;
  }
  @media screen and (max-width: 769px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 500px) {
    padding: 0rem 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  &:hover {
    opacity: 0.6;
  }
  h4 {
    font-weight: normal;
    color: #353535;
    padding-left: 1rem;
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
  @media screen and (max-width: 500px) {
    h4 {
      font-size: 1rem;
    }
    svg {
      width: 30px;
      height: 30px;
  }
  }
`;

export default Contact;