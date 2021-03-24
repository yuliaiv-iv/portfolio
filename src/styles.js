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
  @media screen and (max-width: 1090px) {
    padding: 4rem 2rem;
    grid-column-gap: 30px
  }
`;

export const Discription = styled.div`
  flex: 1;
  z-index: 2;
  align-self: center;
`;

export const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  align-self: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  overflow: hidden;
`;
