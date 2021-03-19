import React from 'react';
import about from '../img/home1.png';
import Wave from './Wave';
import styled from 'styled-components';
import { Layout, Discription, Image, TextConteiner } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, imageAnimation } from '../animation';


function About() {
  return (
    <Layout>
      <Discription>
        <motion.div>
          <TextConteiner>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </TextConteiner>
          <TextConteiner>
            <motion.h2 variants={titleAnimation}>your <span>dream</span> come</motion.h2>
          </TextConteiner>
          <TextConteiner>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </TextConteiner>
        </motion.div>
        <motion.p variants={fade}>Contact us for any photography or videopraphy ideas that you have. We have professionals with amazings kills.</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Discription>
      <Image>
        <motion.img variants={imageAnimation} src={about} alt='about' />
      </Image>
      <Wave />
    </Layout>
  );
}


export default About;