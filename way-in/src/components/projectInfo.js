import React from 'react';
let inProjectList = '';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.onProjectAddition = this.onProjectAddition.bind(this);
    this.onProjectRemoval = this.onProjectRemoval.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      projectList: []
    };
  }

  onProjectAdditionOrRemoval(inProjectList) {
    this.props.onProjectAdditionOrRemoval(inProjectList);
  }

  test() {
    console.log(inProjectList);
  }

  onProjectAddition(e) {
    var newProject = {
      text: e.target.parentElement.className,
      key: e.target.parentElement.className
    };
    this.setState((prevState) => {
      return {
        projectList: prevState.projectList.concat(newProject)
      };
    });
    console.log(this.state.projectList);

    inProjectList = true;
    this.onProjectAdditionOrRemoval(inProjectList);
  }

  onProjectRemoval(e) {
    var filteredProjects = this.state.projectList.filter(function (project){
      return (project.key !== e.target.parentElement.className);
    });
    this.setState({
      projectList: filteredProjects
    });
    console.log(this.state.projectList);

    inProjectList = false;
    this.onProjectAdditionOrRemoval(inProjectList);
  }

  render() {
    const inProjectList = this.props.inProjectList;
    let button;
    if (!inProjectList) {
      button = <AddToList onClick={(e) => this.onProjectAddition(e)} />
    } else {
      button = <RemoveFromList onClick={(e) => this.onProjectRemoval(e)} />
    }
    return (
      <div id="full">
        {button}
        <p id="projecttitle" onClick={() => this.test()} />
        <p id="company" />
        <p id="faculty" />
        <p id="location" />
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