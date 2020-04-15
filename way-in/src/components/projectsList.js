import React from 'react';
// import displayProject from './displayProject.js';
import internData from '../dummydb.json';

let newInProjectList = '';

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.displayProject = this.displayProject.bind(this);
    //Grandparent is projectTable, which now contains
    //the list of projects added.
    this.grandparent=props.grandparent;
    this._id=props._id;
    this.state = {
      inProjectList: false
    };
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
    internData.map((postDetail) => {
      if (id === postDetail.id) {
        document.getElementById("projecttitle").innerHTML = postDetail.title;
        document.getElementById("full").className = postDetail.id;
        document.getElementById("company").innerHTML = postDetail.company;
        document.getElementById("faculty").innerHTML = postDetail.faculty;
        document.getElementById("location").innerHTML = postDetail.location;
        document.getElementById("desc").innerHTML = postDetail.description;
      }
    })
  }

  render() {
    const project = this.props.project;
    newInProjectList = this.props.newInProjectList;

    return (
      <>
        <div className={ `${this.state.inProjectList ? "applyStudent inList" : "applyStudent notInList"}` } id={project.id}
          onClick={() => this.displayProject(project.id)} onKeyPress={() => this.displayProject(project.id) } tabindex="0">
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