import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person.js'
import Projects from './Components/Projects.js';
import AddProject from './Components/AddProject.js';

class App extends Component {

constructor(){
  super();
  this.state = {
    projects:[]
  }
}

componentWillMount(){
  this.setState ({
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
  });
}
  switchNameHandler = () =>{
    // console.log('Test');
  }
  handleAddProject(var1){
    // console.log(var1);
    let projects = this.state.projects;
    projects.push(var1);
    this.setState({var1:var1})
  }
  render() {
    return (

      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <h1> Hi , I am learning react, </h1>

      <Projects projects={this.state.projects}/>

      </div>
    );
  }
}

export default App;
