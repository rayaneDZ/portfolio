import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div id='projects-container'>
        <h4>These are the latest 6 projects I did</h4>
        <div id="projects">
        </div>
        <div className="chevron second" id="contact-scroll-chevron">
          <h6>Contact Me</h6>
          <p>></p>
        </div>
    </div>
  );
}
export default Projects;


let content = [];
let response = [];
////////////////////XML////////////////////////
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      response = JSON.parse(xhttp.responseText);
      display();
    }
};
xhttp.open('GET', 'https://api.github.com/users/rayaneDZ/repos', true);
xhttp.send();
///////////////////XML//////////////////////
const display = () => {
  let length;
  if(response.length>6){
    length = 6;
  }else{
    length=response.length;
  }
  for (let i = 0; i < length; i++) {
      console.log(response[i].name);
      content.push({
            url : response[i].html_url,
            title : response[i].name,
            description : response[i].description,
            updated_at : response[i].updated_at  
      });
  }
  console.log(content);
  for (var i = 0; i < length; i++) {
    document.getElementById('projects').innerHTML += `
      <div class="project">
        <div class="img-container">
          <p class="desc">${content[i].description}</p>
        </div>
        <div class="bar">
          <a href="${content[i].url}" target="_blank">${content[i].title}</a>
        </div>
      </div>
    `;
  }
}