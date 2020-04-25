import React from 'react';
// import displayProject from './displayProject.js';
import internData from '../dummydb.json';

let newInProjectList = '';
let projectArray = [];

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.displayProject = this.displayProject.bind(this);
    //Grandparent is projectTable, which now contains
    //the list of projects added.
    this.grandparent=props.grandparent;
    this._id=props._id;
    this.state = {
      inProjectList: false,
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

  componentWillReceiveProps({newInProjectList}){
    if (this.grandparent.state.addedProjects[this._id]){
      this.setState({inProjectList: true});
    }else{
      this.setState({inProjectList: false});
    }
  }

  onProjectAdditionOrRemoval(){
    let inProjectList = this.props.newInProjectList;
    this.setState({
      inProjectList: inProjectList
    });
  };

  displayProject(id) {
    // console.log(this._reactInternalFiber.key);
    // console.log(this.state.inProjectList);
    this.props.onProjectListExpansion(this.state.inProjectList);
    projectArray.map((postDetail) => {
      if (id === postDetail.id) {
        document.getElementById("projecttitle").innerHTML = postDetail.title;
        document.getElementById("full").className = postDetail.id;
        document.getElementById("company").innerHTML = postDetail.company;
        document.getElementById("faculty").innerHTML = postDetail.faculty;
        document.getElementById("location").innerHTML = postDetail.location;
        document.getElementById("desc").innerHTML = postDetail.project_description;
      }
    })
  }

  render() {
    const project = this.props.project;
    newInProjectList = this.props.newInProjectList;

    return (
      <>
        <div className={ `${this.state.inProjectList ? "applyStudent inList" : "applyStudent notInList"}` } id={project.id}
          onClick={() => this.displayProject(project.id)} onKeyPress={() => this.displayProject(project.id) } tabIndex="0">
          <p>{project.title}</p>
          <p>{project.company}</p>
          <p>{project.location}</p>
          <p>{project.faculty}</p>
        </div>
      </>
    );
  }
}

export default ProjectsList;