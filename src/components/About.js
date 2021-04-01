import React from 'react';
import profile from '../img/profile.jpeg';
import styled from 'styled-components';
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
        <motion.p variants={fade}>Разработка - это динамичный и увлекательный процесс, основанный на творческом решении проблем и постоянных инновациях</motion.p>
        <Button variants={fade}>
          <a
            href={externalLinks.hh}
            target='_blank'
            rel="noreferrer"
          >
            Резюме
          </a>
        </Button>
      </Discription>
      <Image>
        <Profile
          className='image'
          variants={imageAnimation}
          src={profile}
          alt='about'
        />
      </Image>
      <Wave />
    </Layout>
  );
}

const Button = styled(motion.button)`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Profile = styled(motion.img)`
  @media screen and (max-width: 700px) {
    max-width: 300px;
  }
`;

export default About;