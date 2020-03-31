import React from 'react';
import ProjectsList from './projectsList';
import internData from '../dummydb.json';
let newParentState = '';

class FilterProjects extends React.Component{
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      inProjectList: '',
      childKey: '',
      newInProjectList: ''
    };
  }

  handler(childState) {
    this.setState({
      inProjectList: childState
    })
    this.props.parentHandler(this.state.inProjectList);
  }

    render(){
      let newParentState = this.props.newParentState;
        let projectArray = [];

      {internData.map((project)=>{
        if (this.props.locationState == '' && this.props.facultyState == ''){
          projectArray.push(project);
        } if (this.props.locationState == project.location && this.props.facultyState == '') {
          projectArray.push(project);
        } if (this.props.facultyState == project.faculty && this.props.locationState == '') {
          projectArray.push(project);
        } if (this.props.locationState == project.location && this.props.facultyState == project.faculty){
          projectArray.push(project);
        }
      })}

        return(
          <>
        {projectArray.map((project)=>{
            return <ProjectsList project={project} key={project.id} handler={this.handler} newParentState={newParentState} />
          })}
          </>
        );
    };
}

export default FilterProjects;