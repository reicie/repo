import React, {useState} from 'react';
import './navbar.css';

import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose} from'react-icons/ai';

import {Link} from "react-scroll";
// import {Link} from 'react-router-dom';

import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div className={nav ? 'navbar navbar-bg': 'navbar'}>
            <div className={nav ? 'logo dark': 'logo'}>
                {/* company name */}
                <a href='/'><h2>Splendid Safaris</h2></a>
            </div>
            {/* items of nav bar */}
            <ul className="nav-menu">
                <Link to="destinations" smooth={true} duration={500}><li>DESTINATIONS</li></Link>
                <Link to="travels" smooth={true} duration={500}><li>TRAVEL IDEAS</li></Link>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>PLAN WITH PEACE OF MIND</li>

                {/* <Link smooth={true} duration={500}><li>BLOG</li></Link>
                <Link smooth={true} duration={500}><li>ABOUT</li></Link>
                <Link smooth={true} duration={500}><li>PLAN WITH PEACE OF MIND</li></Link> */}
            </ul>
            {/* icons that are displayed at nav bar at all times */}
            <div className="nav-icons">
                <BiSearch className='icon' style={{marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            {/* Hamburger menu for small screens */}
            <div className="hamburger" onClick={handleNav}>
                {nav ? (<AiOutlineClose className="icon dark" />): (<HiOutlineMenu className="icon" />)}
            </div>
            {/* mobile nav menu */}
            <div className={nav ?'mobile-menu active': 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to="destinations" smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to="travels" smooth={true} duration={500}><li>Travel Ideas</li></Link>
                    {/* <Link smooth={true} duration={500}><li>Blog</li></Link>
                    <Link smooth={true} duration={500}><li>About</li></Link>
                    <Link smooth={true} duration={500}><li>Plan With Peace of Mind</li></Link> */}
                </ul>
                {/* replace icons with buttons on mobile */}
                <div className="mobile-menu-button">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    {/* social media icons */}
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaWhatsapp className="icon" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
