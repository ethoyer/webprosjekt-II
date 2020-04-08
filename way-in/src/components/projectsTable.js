import React from 'react';
import FilterProjects from './filterProjects';

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: '', faculty: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e){
  //   this.setState({location: e.target.value, faculty: ''});
  // }

  handleChange(e){
    this.setState({location: document.getElementById('projectlocation').value, faculty: document.getElementById('projectfaculty').value,});
  }

  render() {
    return (
      <>
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
      <FilterProjects locationState = {this.state.location} facultyState = {this.state.faculty} />
      </>
    )
  }

}

export default ProjectsTable;