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
        <h2>Ключевые <span>навыки</span></h2>
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
        <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</p>
      </ServicesSection>
    </ServicesLayout>
  );
}

const ServicesLayout = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 100%;
    padding: 4rem 0rem 4rem 0rem;
  }
  span {
    color: #D96ED4;
  }
`;

const ServicesSection = styled(Discription)`
  padding-left: 5rem;
  padding-right: 0;
`;

const CardsConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      /* background: white;
      color: black; */
      padding: 1rem;
    }
  }
`;

export default Services;