import React from 'react';
import FilterProjects from './filterProjects';
import ProjectInfo from './projectInfo';
let inProjectList = '';
let newInProjectList = '';
let projectArray = [];

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.onLocationAndFacultyChange = this.onLocationAndFacultyChange.bind(this);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.displayProjectList = this.displayProjectList.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.state = {
    location: '', 
    faculty: '',
    inProjectList: '',
    projectList: [],
    addedProjects: [], //array to tell whether a project is added.
    isLoading: true
  };
  }

  componentDidMount() { //collects data from database/view.php
    return fetch('http://localhost/way_in_db/view.php')
      .then((response) => response.json())
      .then((responseJson) => {
        projectArray = responseJson;
        console.log(projectArray);
        this.setState({ isLoading: false }); //sets state forcing a reload so collected data is shown
      })
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
    this.props.onProjectAdditionOrRemoval(this.state.projectList);
  }

  displayProjectList(){ 
    let projectList = this.state.projectList;
    document.getElementById("projectList").innerHTML = "";
    let projectOrder = 1; //sets the preferred order of projects

  projectArray.map((project) => { //looks through database to find project with matching id
    projectList.map((chosenProject) =>{
      if(parseInt(project.id) == chosenProject.key){ //displays project title and company name on the form page
        document.getElementById("projectList").innerHTML += "<span>" + projectOrder + ". " + project.title + " - " + project.company_name + "</span>";
        projectOrder++;
      }
    })
  })
  }

  updateOnProjectAddorRemove(variable, value){
    variable = value;
  }

  nextPage(e) {
    e.preventDefault();
    document.getElementById("studAppMain").className = "hidden";
    document.getElementById("studform").className = "visible";
    console.log(this.state.projectList);
    this.displayProjectList();
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
      <a id="next" href="" onClick={(e) => this.nextPage(e)}>NEXT</a>
      </>
    )
  }

}

export default ProjectsTable;