import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScroll } from '../components/useScroll';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { motion } from 'framer-motion';
import { fade, imageAnimation, pageAnimation, lineAnimation } from '../animation';

function OurWork() {

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

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
        <Movie ref={element3}>
          <motion.h2 variants={fade}>athlete</motion.h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/work/the-athlete'>
            <Hide>
              <motion.img variants={imageAnimation} initial='show' src={athelete} alt='something' />
            </Hide>
          </Link>
        </Movie>
        <Movie ref={element}>
          <h2>good-times</h2>
          <div className='line'></div>
          <Link to='/work/good-times'>
            <Hide>
              <motion.img variants={imageAnimation} animate={controls} src={theracer} alt='something' />
            </Hide>
          </Link>
        </Movie>
        <Movie ref={element2}>
          <h2>the-racer</h2>
          <div className='line'></div>
          <Link to='/work/the-racer'>
            <Hide>
              <motion.img variants={imageAnimation} animate={controls2} src={goodtimes} alt='something' />
            </Hide>
          </Link>
        </Movie>
      </Work>
      <Footer theme='#fff'/>
    </Section>
  );
}

const Section = styled.section`
  background: rgb(255, 255, 255);
`;

const Work = styled(motion.div)`
  min-height: 100vh;
  max-width: 1440px;
  overflow: hidden;
  padding: 0rem 5rem;
  margin: auto;
  h2 {
    padding: 1rem 0rem;
  }
  @media screen and (max-width: 1090px) {
    padding: 0rem 2rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 4rem;
  @media screen and (max-width: 1090px) {
    padding-bottom: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;