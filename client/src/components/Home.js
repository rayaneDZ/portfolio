import React from "react";
import "./home.css";

const Home = (props) => {
    return (
      <div id = "home-container">
        <h1 id="welcome">WELCOME</h1>
        <p id="description">Full-stack Web Developer</p>
        <img alt="pic of myself" id="image" src='../images/background.JPG'/>
        <div className="chevron" id="projects-scroll-chevron">
          <h6>See more</h6>
          <p>></p>
        </div>
      </div>
    );
}
export default Home;

