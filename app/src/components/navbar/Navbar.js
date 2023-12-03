import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from "../../assets/menus.png";
import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavBar] = useState(true);
    return (
        <div className='navbar' >
            <div className='logo' >
                <Link exact to="/" className="logo-text" > TEAMS. </Link>
            </div>
            <div className="right-nav" id={navbar ? "open" : "close"} >
                <NavLink exact to="/" className="link" activeClassName="active" onClick={() => { setNavBar(false) }}  >Home</NavLink>
                <NavLink exact to="/user/create" className="link" activeClassName="active" onClick={() => { setNavBar(false) }}  >Create Users</NavLink>
                <NavLink exact to="/teams" className="link" activeClassName="active" onClick={() => { setNavBar(false) }}  >Teams</NavLink>
            </div>
            <div className="menu" onClick={() => setNavBar(!navbar)} >
                <img src={MenuIcon} alt='menu-icon' />
                {/* <MenuIcon style={{ fontSize: "36px" }} className="menu-icon" /> */}
            </div>
        </div>
    )
}

export default Navbar