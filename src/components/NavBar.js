import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../img/menu.svg';
import closeBtn from '../img/close-btn.svg';

import { NavAnimation, ItemsAnimation } from '../animation';
import { motion } from 'framer-motion';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);
  
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }

  const windowSize = useWindowSize();

  console.log(windowSize < 768 && isOpen)

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  return (
    <Header>
      <div className='container'>
        <div className='navigation'>
          <h1>
            <Link className='logo' to='/'>Portfolio</Link>
          </h1>
          <motion.div
            className='menu-open menu'
            variants={windowSize < 768 ? NavAnimation : null}
            animate={isOpen ? 'show' : 'hidden'}
          >
            <motion.ul 
              variants={windowSize < 768 ? ItemsAnimation : null}
              //animate={(windowSize < 768 && isOpen) ? 'hidden' : 'show'}
              >
              <li onClick={handleClick}>
                <NavLink exact to='/' activeClassName='active'>Обо мне</NavLink>
              </li>
              <li onClick={handleClick}>
                <NavLink exact to='/work' activeClassName='active'>Мои Проекты</NavLink>
              </li>
              <li onClick={handleClick}>
                <NavLink exact to='/contact' activeClassName='active'>Контакты</NavLink>
              </li>
            </motion.ul>
          </motion.div>
          <button onClick={handleClick}>
            {isOpen ? <img src={closeBtn} /> : <img src={menu} />}
          </button>
        </div>
      </div>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    background: #282828;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .container {
    max-width: 1440px;
    margin: 0px auto;
    padding: 0rem 5rem;
  }
  .navigation {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
  button {
    background: transparent;
    display: none;
    border: none;
    padding: 0;
    z-index: 5;
  }
  img {
    vertical-align: bottom;
    box-sizing: none;
  }
  ul {
    display: flex;
    list-style: none;
    z-index: 5;
    position: relative;
  }
  li {
    padding-left: 5rem;
  }
  a {
    color: white;
  }
  .logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
    color: #fff;
    position: relative;
    z-index: 10;
  }
  .active {
    height: 0.3rem;
    border-bottom: solid 3px #23d997;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 1090px) {
    .container {
      padding: 0rem 2rem;
    }
  }
  @media screen and (max-width: 767px) {
    .menu {
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
      flex-direction: column;
      background: #282828;
      z-index: 1;
      padding-top: 60px;
    }
    /* .menu {
      display: none;
    } */
    .navigation {
      height: 60px;
    }
    li {
      padding: 0.6rem 2rem;   
    }
    button {
      display: block;
    }
  }
`;


export default NavBar;