import React, {useState} from 'react';
import './navbar.css';

import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose} from'react-icons/ai';

import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div className={nav ? 'navbar navbar-bg': 'navbar'}>
            <div className={nav ? 'logo dark': 'logo'}>
                {/* company name */}
                <h2>LUXURY TRAVELS KENYA.</h2>
            </div>
            {/* items of nav bar */}
            <ul className="nav-menu">
                <li>DESTINATIONS</li>
                <li>TRAVEL IDEAS</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>PLAN WITH PEACE OF MIND</li>
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
                    <li>Destinations</li>
                    <li>Travel Ideas</li>
                    <li>Discover</li>
                    <li>About</li>
                    <li>Plan with peace of mind</li>
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
