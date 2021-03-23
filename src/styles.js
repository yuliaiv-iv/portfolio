import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Layout = styled(motion.div)`
  min-height: 80vh;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 5rem;
  color: white;
  @media screen and (max-width: 1090px) {
    padding: 3rem 2rem;
  }
`;

export const Discription = styled.div`
  flex: 1;
  min-width: 500px;
  padding-right: 4rem;
  z-index: 2;
`;

export const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  overflow: hidden;
`;
