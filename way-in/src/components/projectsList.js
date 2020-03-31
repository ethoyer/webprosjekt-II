import React from 'react';
// import displayProject from './displayProject.js';
import internData from '../dummydb.json';

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.displayProject = this.displayProject.bind(this);
    this.updateTest = this.updateTest.bind(this);
    this.state = {
      inProjectList: false,
      newInProjectList: false
    };
  }

  // componentDidUpdate(){
  //   if (this.props.newParentState === true) {
  //     this.setState({newInProjectList: true});
  //   }
  // }

  // getDerivedStateFromProps(newParentState, inProjectList) {
  //   if(!prevState.inProjectList && newParentState.isReady) {
  //     return {inProjectList: true};
  //   }
  // }

  updateTest(){
    this.setState({inProjectList: true}, () => console.log(this.state.inProjectList));
    console.log("inList for projectList:");
  }

  displayProject(id) {
    // console.log("parentstate in projectList.js:")
    // console.log(this.props.newParentState);
    // console.log("others:")
    // console.log(id);
    // console.log(this._reactInternalFiber.key);
    console.log(this.state.inProjectList);
    this.props.handler(this.state.inProjectList);

    {
      internData.map((postDetail) => {
        if (id == postDetail.id) {
          // document.getElementById("projectbutton").innerHTML = "Add Project";
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
    let newParentState = this.props.newParentState;
    return (
      <>
      <p onClick={() => this.updateTest()}>test</p>
      <div className="applyStudent" id={project.id} onClick={() => this.displayProject(project.id)}>
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