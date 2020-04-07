import React from 'react';
import ProjectsList from './projectsList';
import internData from '../dummydb.json';
let inProjectList = '';
let newInProjectList = '';

class FilterProjects extends React.Component {
  constructor(props) {
    super(props);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
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
    let projectArray = [];
    let newInProjectList = this.props.newInProjectList;

    internData.map((project) => {
      if (this.props.locationState === '' && this.props.facultyState === '') {
        projectArray.push(project);
      } if (this.props.locationState === project.location && this.props.facultyState === '') {
        projectArray.push(project);
      } if (this.props.facultyState === project.faculty && this.props.locationState === '') {
        projectArray.push(project);
      } if (this.props.locationState === project.location && this.props.facultyState === project.faculty) {
        projectArray.push(project);
      }
    })

    return (
      <>
        {projectArray.map((project) => {
          return <ProjectsList project={project}
            key={project.id}
            onProjectListExpansion={this.onProjectListExpansion}
            newInProjectList = {newInProjectList} />
        })}
      </>
    );
  };
}

export default FilterProjects;