import React from 'react';
// import displayProject from './displayProject.js';
import internData from '../dummydb.json';

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.displayProject = this.displayProject.bind(this);
    this.state = {
      inProjectList: false
    };
  }

  displayProject(id) {
    // console.log(this._reactInternalFiber.key);
    // console.log(this.state.inProjectList);
    this.props.onProjectListExpansion(this.state.inProjectList);
    {
      internData.map((postDetail) => {
        if (id == postDetail.id) {
          document.getElementById("projecttitle").innerHTML = postDetail.title;
          document.getElementById("full").className = postDetail.id;
          document.getElementById("company").innerHTML = postDetail.company;
          document.getElementById("faculty").innerHTML = postDetail.faculty;
          document.getElementById("location").innerHTML = postDetail.location;
          document.getElementById("desc").innerHTML = postDetail.description;
        }
      })
    }
  }
  render() {
    const project = this.props.project;
    return (
      <>
      <div className="applyStudent" id={project.id}
        onClick={() => this.displayProject(project.id)}>
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