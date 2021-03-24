import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../img/menu.svg';
import closeBtn from '../img/close_btn.svg';


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
          <ul className={isOpen ? 'menu-open' : 'menu'}>
            <li>
              <NavLink exact to='/' activeClassName='active'>Обо мне</NavLink>
            </li>
            <li>
              <NavLink exact to='/work' activeClassName='active'>Мои Проекты</NavLink>
            </li>
            <li>
              <NavLink exact to='/contact' activeClassName='active'>Контакты</NavLink>
            </li>
          </ul>
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
  }
  .menu {
    display: flex;
    list-style: none;
    z-index: 5;
  }
  .menu-open {
    top: -100%;
    transition: all 0.5s ease 0s;
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
    .menu-open {
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      background: #282828;
      height: 100%;
      z-index: 1;
      padding-top: 100px;
      transition: all 0.5s ease 0s;
    }
    .menu {
      display: none;
    }
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