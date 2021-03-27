import React from 'react';
import About from "../components/About";
import Faq from '../components/Faq';
import Services from '../components/Services';
import ScrollTop from '../components/ScrollTop';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Footer from '../components/Footer';

function AboutMe() {
  return (
    <>
      <motion.div
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        style={{ background: '#1b1b1b' }}
      >
        <ScrollTop />
        <About />
        <Services />
        <Faq />
      </motion.div>
      <Footer theme='#1b1b1b' />
    </>
  );
}

export default AboutMe;