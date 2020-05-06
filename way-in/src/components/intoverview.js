import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsTable from './projectsTable';
import AppButton from './appButton';
import arrowLight from '../pictures/arrowLight.png';
let projectArray = [];

class IntOverview extends React.Component {
  constructor(props) {
    super(props);
    this.onProjectAdditionOrRemoval = this.onProjectAdditionOrRemoval.bind(this);
    this.state = {
      projectList: [],
      isLoading: true
    };
  }

  componentDidMount() { //collects data from database/view.php
    return fetch(this.props.intdb)
      .then((response) => response.json())
      .then((responseJson) => {
        projectArray = responseJson;
        console.log(projectArray);
        this.setState({ isLoading: false }); //sets state forcing a reload so collected data is shown
      })
  }

  onProjectAdditionOrRemoval(childState) {
    this.setState({ projectList: childState })
  }

  render() {
    return (
      <main id="studAppMain" className="visible">
        <h1 id="title">{this.props.title}</h1>
        <ProjectsTable onProjectAdditionOrRemoval={this.onProjectAdditionOrRemoval}
        projectArray={projectArray} />
        <img id="arrowLight" src={arrowLight}></img>
      </main>
    )
  }
}
export default IntOverview;

