import React, { Component } from "react";
import "./landingpage.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class LandingPage extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div id="landingpage-container">
                <NavBar />
                <Home />
                <Projects />
                <Contact />
            </div>
        );
    }
}
export default LandingPage;
