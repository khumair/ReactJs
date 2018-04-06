import React, { Component } from 'react';
import ItemsProject from './ItemsProject';

class Projects extends Component {


  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project =>{
        return(
          <ItemsProject key={project.title} project ={project} />
        );
      });
    }
    return (
      <div className="Projects">
        {projectItems}
      </div>

    );
  }
}

export default Projects;
