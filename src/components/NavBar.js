import React, { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../img/menu.svg';
import closeBtn from '../img/close-btn.svg';
import { NavAnimation, ItemsAnimation, ListAnimation } from '../animation';
import { motion } from 'framer-motion';
import { navigation } from '../utils/info';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isShow, setIsShow] = useState({ NavAnimation, ItemsAnimation });

  const windowSize = useWindowSize();
  const resolution = windowSize < 768;

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  const handleOpacity = () => {
    setIsShow(isShow.ItemsAnimation.show.opacity)
    setIsShow(isShow.NavAnimation.show.height)
  }

  return (
    <Header>
      <div className='container'>
        <div className='navigation'>
          <h1>
            <Link className='logo' to='/'>Portfolio</Link>
          </h1>
          <motion.div
            className='menu'
            style={{ height: 'max-content' }}
            variants={resolution ? NavAnimation : handleOpacity}
            animate={(resolution && isOpen) ? 'show' : 'hidden'}
          >
            <motion.ul
              style={{ height: 'max-content' }}
              variants={resolution ? ItemsAnimation : handleOpacity}
              animate={isOpen ? 'show' : 'hidden'}
            >
              {navigation.map(({ text, url }) =>
                <motion.li 
                  key={text}
                  variants={resolution ? ListAnimation : handleOpacity}
                  animate={(resolution && isOpen) ? 'show' : 'hidden'}
                >
                  <NavLink
                    onClick={handleClick}
                    exact to={url}
                    activeClassName='active'
                  >
                    {text}
                  </NavLink>
                </motion.li>
              )}
            </motion.ul>
          </motion.div>
          <button onClick={handleClick}>
            {isOpen ? <img src={closeBtn} alt='закрыть' /> : <img src={menu} alt='меню' />}
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
    display: none;
    border: none;
    padding: 0;
    z-index: 5;
    &:hover {
      background: none;
    }
  }
  img {
    vertical-align: bottom;
    box-sizing: none;
    &:hover {
      opacity: 0.6;
    }
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
    opacity: 1;
  }
  @media screen and (max-width: 1180px) {
    .container {
      padding: 0rem 2rem;
    }
  }
  @media screen and (max-width: 769px) {
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
    ul {
      display: block;
    }
    .navigation {
      height: 60px;
    }
    li {
      padding: 1rem 2rem;   
    }
    button {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      padding: 0rem 1rem;
    }
    li {
      padding: 1rem 1rem;   
    }
  }
`;


export default NavBar;