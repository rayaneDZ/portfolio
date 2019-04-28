import React, { Component } from "react";
import "./testimonials.css";
import axios from "axios";

class Testimonials extends Component {
  constructor(){
    super();
    this.state = {
      testimonies : null,
      name : '',
      testimony : ''
    }
    this.testify = this.testify.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    fetch('/api/testimonies')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(testimonies => this.setState({testimonies}));
  }
  testify(){
    if(this.state.name !== '' || this.state.testimony !== ''){
      axios.post('/api/testimony', {
        "name": this.state.name,
        "testimony" : this.state.testimony
      })
      .then(result => {
        const updatedTestimonials = this.state.testimonies.concat(result.data.createdtestimonial);
        this.setState({
          testimonies : updatedTestimonials,
          name : '',
          testimony : ''
        });
        console.log('testimony sent succesfully...', result);
      })
      .catch(err =>{
        console.log("ERROR", err);
      });
    }
  }
  handleChange(e){
    let value = e.target.value;
    if(e.target.id === 'name'){
      this.setState({
        name : value
      });
    }else{
      this.setState({
        testimony: value
      });
    }
  }
  render(){
    return (
      <div id='testimonials-container'>
        <h2>Testimonials</h2>
        <div id="testimonials">
          {
            this.state.testimonies ? 
              <ul>
              {
                this.state.testimonies.map(testimony => 
                <li key={testimony._id} id={testimony._id}> <h3>{testimony.name}</h3> <p>{testimony.testimony}</p></li>)
              }
              </ul>
            : <p id='loading'>No testimonials yet...</p>
          }
        </div>
        <div id="input-field">
          <input type='input' id='name' placeholder='Enter your name' value={this.state.name} onChange={this.handleChange}/>
          <input type='input' id='testimony' placeholder='Say something nice about me' value={this.state.testimony} onChange={this.handleChange}/>
          <button type='button' id='addButton' onClick={this.testify}>Send Testimony</button>
        </div>
      </div>
    );
  }
}
export default Testimonials;