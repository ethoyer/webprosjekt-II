import React from 'react';
import ProjectsList from './projectsList';
let inProjectList = '';
let projectArray = []; //holds data collected from database

class FilterProjects extends React.Component {
  constructor(props) {
    super(props);
    this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
    this.parent = props.parent;
    this.state = {
      inProjectList: '',
      childKey: '',
      isLoading: true
    };
  }

  componentDidMount() { //collects data from database/view.php
    return fetch('http://localhost/way_in_db/view.php')
      .then((response) => response.json())
      .then((responseJson) => {
        projectArray = responseJson;
        console.log(projectArray);
        this.setState({ isLoading: false }); //sets state forcing a reload so collected data is shown
      })
  }

  onProjectListExpansion(childState) {
    inProjectList = childState;
    this.props.onProjectListExpansion(inProjectList);
  }

  render() {
    let filteredArray = []; //holds the filtered project array
    let newInProjectList = this.props.newInProjectList;

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
            newInProjectList={newInProjectList} />
        })}
      </>
    );
  };
}

export default FilterProjects;