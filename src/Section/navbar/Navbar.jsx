import React from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { IoChatbox } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


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
                        <IoChatbox />
                    </a>
                    <a href="#" className="nav_actions_item">
                        <FaTelegramPlane />
                    </a>
                    <a href="#" className="nav_actions_item">
                        <FaHeart />
                    </a>
                    <a href="#" className="nav_actions_item">
                        <FaPlus />
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar