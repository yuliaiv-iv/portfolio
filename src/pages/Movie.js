import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../utils/movieState';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

function Movie() {

  const history = useHistory();
  const url = history.location.pathname;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((p) => p.url === url);
    setProject(currentProject[0]);
  }, [url]);

  return (
    <Section>
    <ScrollTop />
      {project && (
        <div
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt='' />
            {/* <img src={movie.mainImg} alt='' /> */}
          </HeadLine>
          <ProjectList>
            {project.awards.map((award, index) =>
              <Project key={index}>
                <h4>{award.title}</h4>
                <div className="line"></div>
                <p>{award.description}</p>
              </Project>
            )}
          </ProjectList>
        </div>
      )}
      <Footer theme='#ffffff'/>
    </Section>
  );
}

const Section = styled(motion.div)`
  color: #000000;
  background: rgb(255, 255, 255);
`;

const HeadLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    padding: 2rem;
  }
`;

const ProjectList = styled.div`
  max-width: 1440px;
  margin: auto;
  align-items: center;
  padding: 5rem;
  justify-content: space-around;
  @media screen and (max-width: 1090px) {
    padding: 3rem 2rem;
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

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default Movie;