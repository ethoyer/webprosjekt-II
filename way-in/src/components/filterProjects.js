import React from 'react';
import ProjectsList from './projectsList';
import internData from '../dummydb.json';
let projectInList = '';

class FilterProjects extends React.Component{
  constructor(props) {
    super(props);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      inProjectList: '',
      childKey: ''
    };
  }

 onProjectListExpansion(childState) {
    projectInList = childState;
    this.props.onProjectListExpansion(projectInList);
  }

  test(){
    console.log(projectInList);
  }

    render(){
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
          <p onClick={() => this.test()}>hellu</p>
        {projectArray.map((project)=>{
            return <ProjectsList project={project}
            key={project.id}
            onProjectListExpansion={this.onProjectListExpansion}/>
          })}
          </>
        );
    };
}

export default FilterProjects;