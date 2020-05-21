import React from 'react';
let inProjectList = '';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.onProjectAddition = this.onProjectAddition.bind(this);
    this.onProjectRemoval = this.onProjectRemoval.bind(this);
    this.parent = props.parent;
    this.state = {
      projectList: []
    };
  }

  onProjectAdditionOrRemoval(inProjectList) {
    this.props.onProjectAdditionOrRemoval(inProjectList);
  }

  onProjectAddition(e) { //add project to projectList on addition
    let _key = e.target.parentElement.className;
    var newProject = {
      text: _key,
      key: _key
    };
    this.parent.state.addedProjects[_key] = true;
    this.parent.setState((prevState) => {
      return {
        projectList: prevState.projectList.concat(newProject)
      };
    });
    console.log(this.parent.state.projectList);

    inProjectList = true;
    this.onProjectAdditionOrRemoval(inProjectList);
  }

  onProjectRemoval(e) { //removes project from projectList on removal
    var filteredProjects = this.parent.state.projectList.filter(function (project) {
      return (project.key !== e.target.parentElement.className);
    });
    this.parent.state.addedProjects[e.target.parentElement.className] = false;
    this.parent.setState({
      projectList: filteredProjects
    });
    console.log(this.parent.state.projectList);

    inProjectList = false;
    this.onProjectAdditionOrRemoval(inProjectList);
  }

  render() {
    const inProjectList = this.props.inProjectList;
    let button;
    if (!inProjectList) { //changes the "add to procjet"/"remove from project" button depending on state
      button = <AddToList onClick={(e) => this.onProjectAddition(e)} />
    } else {
      button = <RemoveFromList onClick={(e) => this.onProjectRemoval(e)} />
    }
    return (
      <div id="full">
        {button}
        <div id="companyInfo">
          <p id="projecttitle" />
          <p id="company" />
          <p id="faculty" />
          <p id="location" />
        </div>
        <p id="desc" />
        <p>{inProjectList}</p>
      </div>
    );
  }
}

function AddToList(props) {
  return (
    <button onClick={props.onClick}>
      Add Project
    </button>
  )
}

function RemoveFromList(props) {
  return (
    <button onClick={props.onClick}>
      Remove Project
    </button>
  )
}
export default ProjectInfo;