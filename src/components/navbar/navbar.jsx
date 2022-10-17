import React from 'react'
import './style.jsx'
import { Link } from 'react-router-dom';
import { NavbarWrapper, ListTag } from './style';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <ListTag>
          <Link className='linkTag' to='/home'>
            HomePage
          </Link>
        </ListTag>
        <ListTag>
          <Link className='linkTag' to='/' >
            Login
          </Link>
        </ListTag>
        <ListTag>
          <Link className='linkTag' to='/register' >
            Register
          </Link>
        </ListTag>
        <ListTag>
          <Link className='linkTag' to='/admin' >
            Admin
          </Link>
        </ListTag>
        <ListTag>
          <Link className='linkTag' to='/addPost' >
            AddPost
          </Link>
        </ListTag>
        <ListTag>
          <Link className='linkTag' to='/clipboard' >
            ClipBord
          </Link>
        </ListTag>
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar;