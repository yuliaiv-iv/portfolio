import React from 'react';
import clock from '../img/clock.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { Layout, Discription, Image } from '../styles';

function Services() {
  return (
    <ServicesLayout>
      <Discription>
        <h2>High <span>quality</span> services</h2>
        <CardsConteiner>
          <Card>
            <div className='icon'>
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Loren ipsum dorot sit amet</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Loren ipsum dorot sit amet</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Loren ipsum dorot sit amet</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Loren ipsum dorot sit amet</p>
          </Card>
        </CardsConteiner>
      </Discription>
      <Image>
        <img src={home2} />
      </Image>
    </ServicesLayout>
  );
}

const ServicesLayout = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
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
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default Services;