import React from 'react';
let newInProjectList = '';
let projectArray = [];

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.displayProject = this.displayProject.bind(this);
    this.grandparent=props.grandparent;
    this._id=props._id;
    this.state = {
      inProjectList: false
    };
  }

  UNSAFE_componentWillReceiveProps({newInProjectList}){ //recieves state from grandparent
    if (this.grandparent.state.addedProjects[this._id]){
      this.setState({inProjectList: true});
    }else{
      this.setState({inProjectList: false});
    }
  }

  onProjectAdditionOrRemoval(){
    this.setState({
      inProjectList: newInProjectList
    });
  };

  displayProject(id) {
    projectArray = this.props.projectArray;
    this.props.onProjectListExpansion(this.state.inProjectList);
    projectArray.map((postDetail) => {
      if (id === postDetail.id) {
        document.getElementById("projecttitle").innerHTML = postDetail.title;
        document.getElementById("full").className = postDetail.id;
        document.getElementById("company").innerHTML = postDetail.company_name;
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
          <p className="projectTitle">{project.title}</p>
          <p className="projectCompany">{project.company_name}</p>
          <p className="projectLocation">{project.location}</p>
          <p className="projectFaculty">{project.faculty}</p>
          <p className="projectDescription">{project.project_description}</p>
        </div>
      </>
    );
  }
}

export default ProjectsList;