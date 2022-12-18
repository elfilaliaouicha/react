import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "./Navs.css";
import logo from './../../img/logo.png';  
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im"; 

const Navs = ()=>{
    const [Mobile, setMobile] = useState(false)
    return(
    <nav className="navbar">
            <img src={logo} className="logo"/>
            <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={() =>setMobile(false)}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/tarifs'><li>Tarifs</li></Link>
                <Link to='/faq'><li>FAQ</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross /> : <FaBars />}
            </button>
    </nav>
    );
}
export default Navs;