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
    //her må det være en if funksjon eller no, tror jeg? 
    //key må bli passed som prop sammen med inProjectList/newInProjectList fra ProjectInfo.js og hit  - key er det samme 
    //som idx i json filen og className div'en til høyre på siden får når man åpner en prosjektbeskrivelse
      //for øyeblikket er disse key/idx'ene bare 1, 2 og 3.

    // if funksjonen blir noe lignende:
    // if (this.props.etPassendeNavn === this._reactInternalFiber.key){
    //   this.setState({inProjectList: newInProjectList})
    // }

    // this._reactInternalFiber.key = key til ProjectsList komponenten
    // denne key'en blir satt når komponenten blir laget i filterProjects.js
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