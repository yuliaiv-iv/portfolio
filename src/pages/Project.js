import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../utils/projectState';

import { motion } from 'framer-motion';
import { imageAnimation, pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

import { Image } from '../styles';

function Movie() {

  const history = useHistory();
  const url = history.location.pathname;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((p) => p.url === url);
    setProject(currentProject[0]);
  }, [url]);

  return (
    <Section
      style={{ background: '#fff' }}
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <ScrollTop />
      {project && (
        <div className='container'>
          <HeadLine>
            <h2>{project.title}</h2>
            <Image className='image'>
              <motion.img
                variants={imageAnimation}
                exit='exit'
                initial='hidden'
                animate='show'
                src={project.image}
                alt=''
              />
            </Image>
            <a href='#'>GitHub</a>
          </HeadLine>
          <ProjectList>
            {project.details.map((d, index) =>
              <Project key={index}>
                <h4>{d.title}</h4>
                <div className="line"></div>
                <p>{d.description}</p>
              </Project>
            )}
          </ProjectList>
        </div>
      )}
      <Footer theme='#ffffff' />
    </Section>
  );
}

const Section = styled(motion.section)`
  .container {
    margin-top: 80px;
  }
  .image {
    box-shadow: 0 20px 58px rgb(14 26 57 / 30%);
    margin: 0rem 5rem;
  }
  @media screen and (max-width: 1090px) {
    /* .container {
      padding: 0rem 2rem;
    } */
  }
`;

const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: contain;
    vertical-align: bottom;
  }
  h2 {
    padding: 1rem;
  }
  @media screen and (max-width: 1090px) {
    h2 {
      padding: 1rem;
    }
  }
`;

const ProjectList = styled.div`
  max-width: 1440px;
  margin: auto;
  align-items: center;
  padding: 5rem 5rem;
  justify-content: space-around;
  @media screen and (max-width: 1090px) {
    padding: 3rem 0rem;
  }
`;

const Project = styled.div`
  h4 {
    color: #000000;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0rem 0rem;
    background: #D96ED4;
  }
  p {
    padding: 1rem 0rem 2rem;
    color: #000000;
  }
`;

export default Movie;