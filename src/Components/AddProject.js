import React, {Component} from 'react';
class AddProject extends Component{
constructor(){
  super();
  this.state ={
    newProject:{}
  }
}

static defaultProps = {
  categories: ['Web Development', 'Designing','Marketing']
}
// run this even on click of submit
handleSubmit(e){
if(this.refs.title.value===''){
  alert('Required Title');
}
else {
  this.setState({
    newProject: {
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function() {
      this.props.addProject(this.state.newProject);
      // console.log(this.state);
    });
}
e.preventDefault();
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    });
    return(
      <div>
        <h2>Add Project </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title </label>
            <input type="text" ref="title"  />
          </div>
        <div>
          <label> Category </label>
            <select ref="category" >
              {categoryOptions}
            </select><br/>
        </div>
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
  }
}
export default AddProject;
