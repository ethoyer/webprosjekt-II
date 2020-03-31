import React from 'react';
import ReactDOM from 'react-dom';

let projectList = [];
let parentState;

class ProjectButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeProjectList = this.changeProjectList.bind(this);
    this.state = {
      inProjectList: '',
      newInProjectList: ''
    };
  }

  componentDidUpdate(){
    if (this.props.parentState !== this.state.inProjectList) {
      this.setState({inProjectList: !this.state.inProjectList});
    }
  }

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
      this.componentDidUpdate();
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
    this.state={
      inProjectList: '',
      newInProjectList: ''
    }
  }

  newHandler(newChildState) {
    this.setState({newInProjectList: newChildState});
    this.props.newParentHandler(this.state.newInProjectList);
  }

    render() {
      let parentState = this.props.parentState;
      return (
        <div id="full">
          <ProjectButton newHandler = {this.newHandler} parentState={parentState} />
          <p id="projecttitle" />
          <p id="company" />
          <p id="faculty" />
          <p id="location" />
          <p id="desc" />
        </div>
      );
    }
  }

  export default ProjectInfo;