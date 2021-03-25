import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../utils/projectState';

import { motion } from 'framer-motion';
import { imageAnimation } from '../animation';
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
    <Section style={{ background: '#fff' }}>
      <ScrollTop />
      {project && (
        <div className='container'>
          <HeadLine>
            <h2>{project.title}</h2>
            <Image>
              <motion.img
                variants={imageAnimation}
                exit='exit'
                initial='hidden'
                animate='show'
                src={project.image}
                alt=''
              />
            </Image>
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

const Section = styled.section`
  .container {
    padding: 0rem 5rem;
    margin-top: 80px;
  }
  @media screen and (max-width: 1090px) {
    .container {
      padding: 0rem 2rem;
    }
  }
`;

const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-height: 630px;
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
  padding: 5rem 0rem;
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

// const ImageDisplay = styled.div`
//   min-height: 50vh;
//   img {
//     width: 100%;
//     height: 100vh;
//     object-fit: cover;
//   }
// `;

export default Movie;