import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person.js'
import Projects from './Components/Projects.js';

class App extends Component {

constructor(){
  super();
  this.state = {
    projects:[
      {
        title:'Business Website',
        category: 'Web Development'
      },
      {
        title:'Social Application',
        category: 'Marketing'
      },
      {
        title:'Designing Web',
        category: 'UI and UX'
      }
    ]
  }
}


  switchNameHandler = () =>{
    // console.log('Test');
  }
  render() {
    return (
      <div className="App">
      <h1> Hi , I am learning react, </h1>

      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
