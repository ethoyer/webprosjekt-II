import React from 'react';
import FilterProjects from './filterProjects';
import ProjectInfo from './projectInfo';
let inProjectList = '';
let newInProjectList = '';

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.onLocationAndFacultyChange = this.onLocationAndFacultyChange.bind(this);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.state = {
    location: '', 
    faculty: '',
    inProjectList: '',
    projectList: [],
    addedProjects: [] //array to tell whether a project is added.
  };

  }

  onLocationAndFacultyChange(){
    this.setState({location: document.getElementById('projectlocation').value, 
    faculty: document.getElementById('projectfaculty').value,});
  }

  onProjectListExpansion(childState) {
    inProjectList = childState;
    this.setState({inProjectList: childState})
  }

  onProjectAdditionOrRemoval(childState) {
    this.setState({inProjectList: childState});
    newInProjectList=childState;
  }

  updateOnProjectAddorRemove(variable, value){
    variable = value;
  }

  render() {
    const location = this.state.location;
    const faculty = this.state.faculty;
    inProjectList = this.state.inProjectList;
    newInProjectList = this.state.inProjectList;
    return (
      <>
      <div id="overview">
      <p>
        <select id="projectlocation" value={location} onChange={this.onLocationAndFacultyChange}>
          <option value="">All locations</option>
          <option value="Oslo">Oslo</option>
          <option value="Trondheim">Trondheim</option>
          <option value="Gjøvik">Gjøvik</option>
        </select>
        <select id="projectfaculty" value={faculty} onChange={this.onLocationAndFacultyChange}>
          <option value="">All locations</option>
          <option value="AD">Arkitektur og Design</option>
          <option value="HF">Det humanistiske fakultet</option>
        </select>
      </p>
      <FilterProjects locationState={location} 
      facultyState={faculty} 
      onProjectListExpansion={this.onProjectListExpansion}
      newInProjectList={inProjectList}
      parent={this}
       />
      </div>
      <ProjectInfo inProjectList={inProjectList}
      onProjectAdditionOrRemoval={this.onProjectAdditionOrRemoval}
      parent={this}
      />
      </>
    )
  }

}

export default ProjectsTable;