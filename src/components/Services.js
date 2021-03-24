import React from 'react';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { Layout, Discription, Image } from '../styles';
import { motion } from 'framer-motion';
import { stack } from '../utils/stack';

function Services() {
  return (
    <ServicesLayout>
      <Discription>
        <h2><span>Stack </span>и навыки</h2>
        <CardsConteiner>
          {stack.map((s) =>
            <Card key={s.title}>
              <div className='icon'>
                <img src={s.icon} alt={s.title} />
                <h3>{s.title}</h3>
              </div>
            </Card>
          )}
        </CardsConteiner>
        {/* <p></p> */}
      </Discription>
      <Image>
        <img src={home2} />
      </Image>
    </ServicesLayout>
  );
}

const ServicesLayout = styled(Layout)`
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

const CardsConteiner = styled.div`
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
    @media screen and (max-width: 1090px) {
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

export default Services;