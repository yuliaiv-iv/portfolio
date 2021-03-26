import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import News from '../img/news-main.jpg';
import Player from '../img/player-main.jpg';
import Mesto from '../img/mesto-main.png';
import Travel from '../img/travel-main.jpg';

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
        <Movie>
          <motion.h2 variants={fade}>athlete</motion.h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/work/the-athlete'>
            <Image>
              <img src={News} alt='something' />
            </Image>
          </Link>
        </Movie>
        <Movie>
          <motion.h2 variants={fade}>good-times</motion.h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/work/good-times'>
            <Image>
              <img src={Player} alt='something' />
            </Image>
          </Link>
        </Movie>
        <Movie>
          <h2>the-racer</h2>
          <div className='line'></div>
          <Link to='/work/the-racer'>
            <Image>
              <img src={Mesto} alt='something' />
            </Image>
          </Link>
        </Movie>
        <Movie>
          <h2>travel</h2>
          <div className='line'></div>
          <Link to='/work/travel'>
            <Image>
              <img src={Travel} alt='something' />
            </Image>
          </Link>
        </Movie>
      </Work>
      <Footer theme='#fff'/>
    </Section>
  );
}

const Section = styled.section`
  background: rgb(255, 255, 255);
  margin-top: 80px;
`;

const Work = styled(motion.div)`
  min-height: 100vh;
  max-width: 1440px;
  overflow: hidden;
  padding: 0rem 5rem;
  margin: auto;
  img {
    /* max-height: 630px; */
    transition: transform .5s ease-in-out;
    &:hover {
      transform: scale(1.10);
    }
  }
  @media screen and (max-width: 1090px) {
    padding: 0rem 2rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 4rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 1090px) {
    padding-bottom: 2rem;
  }
  .line {
    margin-bottom: 2rem;
  }
`;

export default Projects;