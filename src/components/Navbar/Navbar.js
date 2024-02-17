import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from '../Navbar/assets/logo.svg';

import {
  LogoImg,
} from './styledComponents';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <LogoImg src={logo} alt="not found"></LogoImg>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/'>
            <li>AboutUs</li>
          </Link>
          <Link to='/Services'>
            <li>Services</li>
          </Link>
          <Link to='/Blog'>
            <li>Blog</li>
          </Link>
          <Link to='/CareerOpportunities'>
            <li>Career Opportunities</li>
          </Link>
          <Link to='/ResourceCenter'>
            <li>Resource Center</li>
          </Link>
          <Link to='/Blog'>
            <li><button className="contact-button">Contact Us</button></li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar