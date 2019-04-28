import React from "react";
import "./contact.css";
import Testimonials from "./Testimonials";

const Contact = () => {
  return (
    <div id='contact-container'>
      <div id="social-media">
        <div id='github'>
          <a href='https://github.com/rayaneDZ' target='_blank' rel="noopener noreferrer">
            <img src='../images/github.jpg' alt="social media icon"/>
          </a>
        </div>
        <div id='instagram'>
          <a href='https://www.instagram.com/rayanebouthiba/' target='_blank' rel="noopener noreferrer">
            <img src="../images/instagram.jpg" alt="social media icon"/>
          </a>
        </div>
        <div id='facebook'>
          <a href='https://web.facebook.com/profile.php?id=100001386776199' target='_blank' rel="noopener noreferrer">
            <img src="../images/facebook.jpg" alt="social media icon"/>
          </a>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
export default Contact;