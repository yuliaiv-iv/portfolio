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
        <div className='section'>
          <HeadLine>
            <h2>{project.title}</h2>
            <Image className='image'>
              <motion.img
                variants={imageAnimation}
                exit='exit'
                initial='hidden'
                animate='show'
                src={project.image}
                alt={project.title}
              />
            </Image>
            <a
              href={project.link}
              target='_blank'
              rel="noreferrer"
            >
              GitHub →
            </a>
          </HeadLine>
          <ProjectList>
            {project.details.map(({title, description}) =>
              <Project key={title}>
                <h4>{title}</h4>
                <div className="line"></div>
                <p>{description}</p>
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
  .section {
    margin-top: 80px;
  }
  .image {
    box-shadow: 0 20px 58px rgb(14 26 57 / 30%);
  }
  h2 {
    padding: 1rem 0rem;
  }
  @media screen and (max-width: 1180px) {
    .section {
      padding: 0rem 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    .section {
      padding: 0rem 1rem;
    }
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
  a {
      font-size: 1.3rem;
      color: #000;
    }
  @media screen and (max-width: 1180px) {
    a {
      font-size: 1rem;
    }
  }
`;

const ProjectList = styled.div`
  max-width: 1440px;
  margin: auto;
  align-items: center;
  padding: 5rem 5rem;
  justify-content: space-around;
  @media screen and (max-width: 1180px) {
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