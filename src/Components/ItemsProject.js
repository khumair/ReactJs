import React, {Component} from 'react';

class ItemsProject extends Component{

  render() {
    return(
      <li className="Project">
        {this.props.project.title}-{this.props.project.category}
      </li>

    );
  }
}
export default ItemsProject;
