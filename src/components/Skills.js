import React from 'react';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { Layout, Discription, Image, Text } from '../styles';
import { motion } from 'framer-motion';
import { stack } from '../utils/stack';
import { titleAnimation, fade, imageAnimation } from '../animation';

function Skills() {
  return (
    <SkillsLayout>
      <Discription>
        <Text>
          <motion.h2 variants={titleAnimation}>
            <span>Stack </span>и навыки
          </motion.h2>
        </Text>
        <motion.div variants={fade}>
          <Cards>
            {stack.map(({ title, icon, }) =>
              <Card key={title}>
                <div className='icon'>
                  <img src={icon} alt={title} />
                  <h3>{title}</h3>
                </div>
              </Card>
            )}
          </Cards>
        </motion.div>
      </Discription>
      <Image>
        <motion.img
          variants={imageAnimation}
          src={home2}
        />
      </Image>
    </SkillsLayout>
  );
}

const SkillsLayout = styled(Layout)`
  margin-top: 0;
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 100%;
    padding: 0rem;
  }
  span {
    color: #D96ED4;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;
const Card = styled.div`
  .icon {
    display: flex;
    align-items: center;
  h3 {
    margin-left: 1rem;
    padding: 1rem;
    max-width: 140px;
  }
  @media screen and (max-width: 1180px) {
    h3 {
      font-size: 1rem;
      padding: 0.6rem;
    }
    img {
      width: 35px;
    }
  }
  }
`;

export default Skills;