import React from 'react';
import ProjectsPreview from './projectsPreview';
import internData from '../dummydb.json';

class FilterProjects extends React.Component{
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
        {projectArray.map((project)=>{
            return <ProjectsPreview project={project} />
          })}
          </>
        );
    };
}

export default FilterProjects;