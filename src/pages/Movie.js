import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MovieState } from '../utils/movieState';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

function Movie() {

  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((m) => m.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
    <ScrollTop />
      {movie && (
        <Details
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='' />
          </HeadLine>
          <Awards>
            {movie.awards.map((award, index) =>
              <Award key={index}>
                <h3>{award.title}</h3>
                <div className="line"></div>
                <p>{award.description}</p>
              </Award>
            )}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const Award = styled.div`
  padding: 1rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
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