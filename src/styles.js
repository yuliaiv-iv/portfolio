import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Layout = styled(motion.div)`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit,minmax(400px,720px) minmax(270px,500px));
  padding: 7rem 5rem;
  margin-top: 80px;
  color: white;
  @media screen and (max-width: 1180px) {
    padding: 4rem 2rem;
    grid-column-gap: 30px;
  }
  @media screen and (max-width: 769px) {
    grid-template-columns: repeat(auto-fit,minmax(350px,720px) minmax(250px,500px));
    margin-top: 60px;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const Discription = styled.div`
  flex: 1;
  z-index: 2;
  align-self: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  align-self: center;
  img {
    object-fit: cover;
    width: 100%
  }
`;

export const Text = styled.div`
  overflow: hidden;
`;
