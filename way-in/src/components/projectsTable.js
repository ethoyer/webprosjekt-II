import React from 'react';
import FilterProjects from './filterProjects';
import ProjectInfo from './projectInfo';
let projectInList = 'abcdefg';

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.onLocationAndFacultyChange = this.onLocationAndFacultyChange.bind(this);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.passProjectListProp = this.passProjectListProp.bind(this);
    this.test = this.test.bind(this);
    this.state = {
    location: '', 
    faculty: ''
  };

  }

  onLocationAndFacultyChange(){
    this.setState({location: document.getElementById('projectlocation').value, 
    faculty: document.getElementById('projectfaculty').value,});
  }

  onProjectListExpansion(childState) {
    projectInList = childState;
    passProjectListProp(projectInList);
  }

  passProjectListProp(variable, value){
    variable = value;
  }

  onProjectAdditionOrRemoval(newIsInProjectList) {
    this.setState({inProjectList: newIsInProjectList});
  }

  test(){
    console.log(projectInList);
  }

  render() {
    const location = this.state.location;
    const faculty = this.state.faculty;
    return (
      <>
      <p onClick={() => this.test()}>Hei</p>
      <div id="overview">
      <p>
        <select id="projectlocation" value={location} onChange={this.onLocationAndFacultyChange}>
          <option value="" selected>All locations</option>
          <option value="Oslo">Oslo</option>
          <option value="Trondheim">Trondheim</option>
          <option value="Gjøvik">Gjøvik</option>
        </select>
        <select id="projectfaculty" value={faculty} onChange={this.onLocationAndFacultyChange}>
          <option value="" selected>All locations</option>
          <option value="AD">Arktektur og Design</option>
          <option value="HF">Det humanistiske fakultet</option>
        </select>
      </p>
      <FilterProjects locationState={location} 
      facultyState={faculty} 
      onProjectListExpansion={this.onProjectListExpansion} />
      </div>
      <ProjectInfo projectInList={projectInList}
      onProjectAdditionOrRemoval={this.onProjectAdditionOrRemoval}
      passProjectListProp={this.passProjectListProp({projectInList})} />
      </>
    )
  }

}

export default ProjectsTable;