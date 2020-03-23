import React from 'react';
import ProjectPreview from './projectPreview';
import internData from '../dummydb.json';

class ProjectTable extends React.Component{
    render(){
        let projectArray = [];

      {internData.map((project)=>{
        if (this.props.parentState == ''){
          projectArray.push(project);
        } if (this.props.parentState == project.location) {
          projectArray.push(project);
        }
      })}

        return(
          <>
        {projectArray.map((project)=>{
            return <ProjectPreview project={project} />
          })}
          </>
        );
    };
}

export default ProjectTable;