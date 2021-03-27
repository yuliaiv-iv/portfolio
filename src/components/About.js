import React from 'react';
import about from '../img/home2.png';
import Wave from './icons/Wave';
import { Layout, Discription, Image, Text } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, imageAnimation } from '../animation';
import { externalLinks } from '../utils/info';

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
        <motion.p variants={fade}>Обучение по направлению направлению</motion.p>
        <motion.button variants={fade}>
          <a
            href={externalLinks.hh}
            target='_blank'
            rel="noreferrer"
          >
            Резюме
          </a>
        </motion.button>
      </Discription>
      <Image>
        <motion.img
          variants={imageAnimation}
          src={about}
          alt='about'
        />
      </Image>
      <Wave />
    </Layout>
  );
}


export default About;