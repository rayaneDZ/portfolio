import React from "react";
import "./navbar.css";
const NavBar = (props) => {
    return (
        <div id='navbar-container'>
            <div id='navbar-text-container'>
                <p>Home</p>
                <p id='projects-scroll'>Projects</p>
                <p id="contact-scroll">Contact</p>
            </div>
            <p id="copyright" >Rayane Bouthiba &#169;</p>
        </div>
    );
}
export default NavBar;
