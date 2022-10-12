import React from 'react'
import headerImage from '../../images/Stock.png'
import './header.css'
const Header = () => {
  return (
    <div className="headerWrapper">
        <img src={headerImage} alt="img"/>
        <p>IMPROVE YOUR SKILLS...</p>
    </div>
  )
}

export default Header;