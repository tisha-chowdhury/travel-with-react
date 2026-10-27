import React from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">PAGES</a>
                        </li>
                        <li>
                            <a href="#">TRAVEL</a>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li>
                            <a href="#">SHOP</a>
                        </li>
                        <li>
                            <a href="#">LEMENTS</a>
                        </li>
                    </ul>
                </div>
                <div className="nav_actions">
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-message"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-location-arrow"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#" className="nav_actions_item">
                        <i className="fa-solid fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar