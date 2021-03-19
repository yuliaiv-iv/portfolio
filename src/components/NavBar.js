import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


function NavBar() {

  return (
    <Nav>
      <h1>
        <Link className='logo' to='/'>Logo</Link>
      </h1>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>1. About us</NavLink>
        </li>
        <li>
          <NavLink exact to='/work' activeClassName='active'>2. Our Work</NavLink>
        </li>
        <li>
          <NavLink exact to='/contact' activeClassName='active'>1. Contact Us</NavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
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
`;


export default NavBar;