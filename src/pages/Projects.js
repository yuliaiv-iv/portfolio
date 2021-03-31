import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import { projects } from '../utils/projectState';
import { motion } from 'framer-motion';
import { Image } from '../styles';
import { fade, pageAnimation, lineAnimation } from '../animation';

function Projects() {

  return (
    <Section>
      <Work
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        style={{ background: '#fff' }}
      >
        <ScrollTop />
        {projects.map(({ title, url, mainImage }) => (
          <Movie key={title}>
            <motion.h2 variants={fade}>{title}</motion.h2>
            <motion.div
              variants={lineAnimation}
              className='line'
            >
            </motion.div>
            <Link to={url}>
              <Image>
                <img src={mainImage} alt={title} />
              </Image>
            </Link>
          </Movie>
        ))}
      </Work>
      <Footer theme='#fff' />
    </Section>
  );
}

const Section = styled.section`
  background: rgb(255, 255, 255);
  margin-top: 80px;
  h2 {
    padding: 1rem 0rem;
  }
  @media screen and (max-width: 769px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 500px) {
    h2 {
      padding: 0.6rem;
    }
  }
`;

const Work = styled(motion.div)`
  min-height: 100vh;
  max-width: 1440px;
  overflow: hidden;
  padding: 0rem 5rem;
  margin: auto;
  img {
    transition: transform .5s ease-in-out;
    &:hover {
      transform: scale(1.10);
    }
  }
  @media screen and (max-width: 1180px) {
    padding: 0rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0rem 1rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 4rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 1180px) {
    padding-bottom: 2rem;
  }
  .line {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 700px) {
    .line {
      margin-bottom: 1rem;
      height: 0.3rem;
    }
  }
`;

export default Projects;