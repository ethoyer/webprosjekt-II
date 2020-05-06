import React from 'react';
import ProjectsList from './projectsList';
let inProjectList = '';
let projectArray = []; //holds data collected from database

class FilterProjects extends React.Component {
  constructor(props) {
    super(props);
    let projectArray = this.props.projectArray;
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.parent = props.parent;
    this.state = {
      inProjectList: '',
      childKey: ''
    };
  }

  onProjectListExpansion(childState) {
    inProjectList = childState;
    this.props.onProjectListExpansion(inProjectList);
  }

  render() {
    let filteredArray = []; //holds the filtered project array
    let newInProjectList = this.props.newInProjectList;
    let projectArray = this.props.projectArray;

    projectArray.map((project) => {
      if (this.props.locationState === '' && this.props.facultyState === '') {
        filteredArray.push(project);
      } if (this.props.locationState === project.location && this.props.facultyState === '') {
        filteredArray.push(project);
      } if (this.props.facultyState === project.faculty && this.props.locationState === '') {
        filteredArray.push(project);
      } if (this.props.locationState === project.location && this.props.facultyState === project.faculty) {
        filteredArray.push(project);
      }
    })

    return (
      <>
        {filteredArray.map((project) => { //displays filtered array
          return <ProjectsList project={project}
            key={project.id}
            _id={project.id}
            grandparent={this.parent}
            onProjectListExpansion={this.onProjectListExpansion}
            newInProjectList={newInProjectList}
            projectArray={projectArray} />
        })}
      </>
    );
  };
}

export default FilterProjects;