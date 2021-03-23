import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../img/menu.svg';


function NavBar() {

  return (
    <Nav>
      <div>
        <h1>
          <Link className='logo' to='/'>Portfolio</Link>
        </h1>
        <ul>
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
        <img src={menu} />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  min-height: 10vh;
  position: sticky;
  background: #282828;
  top: 0;
  z-index: 10;
  div {
    max-width: 1440px;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
  }
  img {
    display: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  a {
    color: white;
    font-size: 1.1rem;
  }
  .logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  .active {
    height: 0.3rem;
    border-bottom: solid 3px #23d997;
    padding-bottom: 5px;
    transition: {
      duration: 0.75;
    }
  }
    @media screen and (max-width: 1090px) {
    div {
      padding: 0rem 2rem;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      display: block;
    }
    ul {
      display: none;
    }
  }
`;


export default NavBar;