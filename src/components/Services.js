import React from 'react';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { Layout, Discription, Image } from '../styles';
import { motion } from 'framer-motion';
import { stack } from '../utils/stack';

function Services() {
  return (
    <ServicesLayout>
      <Image>
        <img src={home2} />
      </Image>
      <ServicesSection>
        <h2><span>Stack </span>и ключевые навыки</h2>
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
      </ServicesSection>
    </ServicesLayout>
  );
}

const ServicesLayout = styled(Layout)`
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 100%;
    padding: 0rem;
  }
  span {
    color: #D96ED4;
  }
`;

const ServicesSection = styled(Discription)`
  padding-left: 4rem;
  padding-right: 0;
  @media screen and (max-width: 1090px) {
    padding-left: 3rem;
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
    }
  }
`;

export default Services;