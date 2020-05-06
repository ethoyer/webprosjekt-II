import React from 'react';
import FilterProjects from './filterProjects';
import ProjectInfo from './projectInfo';
import arrowDark from '../pictures/arrowDark.png';
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
    projectArray = this.props.projectArray;
    
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
          <option value="">All faculties</option>
          <option value="AD">Arkitektur og Design</option>
          <option value="HF">Det humanistiske fakultet</option>
        </select>
      </p>
      <FilterProjects locationState={location} 
      facultyState={faculty} 
      onProjectListExpansion={this.onProjectListExpansion}
      newInProjectList={inProjectList}
      parent={this}
      projectArray={projectArray}
       />
      </div>
      <ProjectInfo inProjectList={inProjectList}
      onProjectAdditionOrRemoval={this.onProjectAdditionOrRemoval}
      parent={this}
      />
      <div  className="navButton">
      <img id="arrowDark" src={arrowDark}></img>
      <a href="" onClick={(e) => this.nextPage(e)}>NEXT</a>
      </div>
      </>
    )
  }

}

export default ProjectsTable;