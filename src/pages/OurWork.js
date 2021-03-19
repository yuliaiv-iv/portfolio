import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScroll } from '../components/useScroll';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';

import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { motion } from 'framer-motion';
import { fade, imageAnimation, pageAnimation, lineAnimation, movieContainer } from '../animation';

function OurWork() {

  // const controls = useAnimation();
  // const controls2 = useAnimation();
  // const [element, view] = useInView({ threshold: 0.5 });
  // const [element2, view2] = useInView({ threshold: 0.5 });

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  // if (view || view2) {
  //   controls.start('show');
  // } else {
  //   controls.start('hidden');
  // }

  return (
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
          <motion.img variants={imageAnimation} animate={controls2} src={goodtimes} alt='something' />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
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