import React from 'react'
import './style.jsx'
import { Link } from 'react-router-dom';
import { NavbarWrapper, ListTag } from './style';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <ListTag>
          <Link activeClassName="navbar__link--active" className='linkTag' to='/home'>
            HomePage
          </Link>
        </ListTag>
        <ListTag>
          <Link activeClassName="navbar__link--active" className='linkTag' to='/' >
            Login
          </Link>
        </ListTag>
        <ListTag>
          <Link activeClassName="navbarLinkActive" className='linkTag' to='/register' >
            Register
          </Link>
          </ListTag>
        <ListTag>
          <Link activeClassName="navbar__link--active" className='linkTag' to='/admin' >
            Admin
          </Link>
          </ListTag>
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar;