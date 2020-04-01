import React from 'react';
import ReactDOM from 'react-dom';

let projectList = [];
let parentState;
let projectInList = '';

class ProjectButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeProjectList = this.changeProjectList.bind(this);
    this.state = {
      inProjectList: '',
      newInProjectList: ''
    };
  }

  // componentDidUpdate(){
  //   if (this.props.parentState !== this.state.inProjectList) {
  //     this.setState({inProjectList: !this.state.inProjectList});
  //   }
  // }

  changeProjectList(e){
    if(e.target.parentElement.className !== ""){
      var newProject = {
        text: e.target.parentElement.className,
        key: e.target.parentElement.className
      };
      projectList.push({newProject});
      console.log(projectList);
      // this.setState({
      //   newInProjectList: true
      // }, () => console.log(this.state.newInProjectList));
      // console.log("^");
      this.props.newHandler(this.state.newInProjectList);
      console.log(this.state.inProjectList);
      // this.componentDidUpdate();
    }
  }

  render(){
    let parentState = this.props.parentState;
    return(
      <button onClick={(e) => this.changeProjectList(e)}>Add Project</button>
    )
  }

}

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.newHandler = this.newHandler.bind(this);
    this.test = this.test.bind(this);
  }

  newHandler(newIsInProjectList) {
    this.props.onProjectAdditionOrRemoval(newIsInProjectList);
    // this.setState({newInProjectList: newChildState});
    // this.props.newParentHandler(this.state.newInProjectList);
  }

  passProjectListProp(projectInList){
    this.props.passProjectListProp(projectInList);
  }

  test(){
    console.log(this.props.projectInList);
  }

    render() {
      return (
        <div id="full">
          <ProjectButton newHandler = {this.newHandler} 
          parentState={parentState} />
          <p id="projecttitle" onClick={() => this.test()} />
          <p id="company" />
          <p id="faculty" />
          <p id="location" />
          <p id="desc" />
          <p>{this.props.projectInList}</p>
        </div>
      );
    }
  }

  export default ProjectInfo;