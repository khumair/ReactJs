import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
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

  state = {
    persons : [
    {name: 'Sophia', age:29},
    {name: 'Max', age:20},
    {name: 'katti', age:32}

    ]
  }
  switchNameHandler = () =>{
    // console.log('Test');
  }
  render() {
    return (
      <div className="App">
      <h1> Hi , I am learning react, </h1>
      <button onClick={this.switchNameHandler}> Switch Name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > My hobby is</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobby is</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby is</Person>
      <Projects />
      </div>
    );
  }
}

export default App;
