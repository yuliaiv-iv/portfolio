import React from 'react';
import about from '../img/home2.png';
import Wave from './Wave';
import { Layout, Discription, Image, Text } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, imageAnimation } from '../animation';


function About() {
  return (
    <Layout>
      <Discription>
        <motion.div>
          <Text>
            <motion.h2 variants={titleAnimation}>Иванова Юлия</motion.h2>
          </Text>
          <Text>
            <motion.h2 variants={titleAnimation}>Junior <span>web</span> developer</motion.h2>
          </Text>
        </motion.div>
        <motion.p variants={fade}>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</motion.p>
        <motion.button variants={fade}>Резюме</motion.button>
      </Discription>
      <Image>
        <motion.img variants={imageAnimation} src={about} alt='about' />
      </Image>
      <Wave />
    </Layout>
  );
}


export default About;