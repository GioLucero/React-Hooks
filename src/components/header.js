import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import logo from '../images/logo-designcode.svg';

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img width="30" /><img src={logo} width="30" /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Buy</button></Link>
  </div>
</div>
)

export default Header
