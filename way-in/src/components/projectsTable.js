import React from 'react';
import FilterProjects from './filterProjects';
import ProjectInfo from './projectInfo';
let parentState = '';

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: '', faculty: '', inProjectList: '', newInProjectList: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handler = this.handler.bind(this);
    this.newHandler = this.newHandler.bind(this);
  }

  handleChange(){
    this.setState({location: document.getElementById('projectlocation').value, faculty: document.getElementById('projectfaculty').value,});
  }

  handler(childState) {
    this.setState({inProjectList: childState});
  }

  newHandler(newChildState) {
    this.setState({newInProjectList: newChildState});
  }

  render() {
    return (
      <>
      <div id="overview">
      <p>
        <select id="projectlocation" value={this.state.location} onChange={this.handleChange}>
          <option value="" selected>All locations</option>
          <option value="Oslo">Oslo</option>
          <option value="Trondheim">Trondheim</option>
          <option value="Gjøvik">Gjøvik</option>
        </select>
        <select id="projectfaculty" value={this.state.faculty} onChange={this.handleChange}>
          <option value="" selected>All locations</option>
          <option value="AD">Arktektur og Design</option>
          <option value="HF">Det humanistiske fakultet</option>
        </select>
      </p>
      <FilterProjects locationState = {this.state.location} facultyState = {this.state.faculty} parentHandler = {this.handler} newParentState = {this.state.newInProjectList} />
      </div>
      <ProjectInfo parentState = {this.state.inProjectList} newParentHandler = {this.newHandler} />
      </>

    )
  }

}

export default ProjectsTable;