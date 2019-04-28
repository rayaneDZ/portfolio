import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from "jquery";


$(document).ready(function () {


  $("#projects-scroll-chevron").click(function () {
    $("html, body").animate({ scrollTop: $('#projects-container').offset().top }, 500);
  });
  $("#contact-scroll-chevron").click(function () {
    $("html, body").animate({ scrollTop: $('#contact-container').offset().top }, 500);
  });
  $("#projects-scroll").click(function () {
    $("html, body").animate({ scrollTop: $('#projects-container').offset().top }, 1000);
  });
  $("#contact-scroll").click(function () {
    $("html, body").animate({ scrollTop: $('#contact-container').offset().top }, 1000);
  });
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();