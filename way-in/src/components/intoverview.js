import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsTable from './projectsTable';
import AppButton from './appButton';
import arrowDark from '../pictures/arrowDark.png';
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
    return fetch('http://localhost/way_in_db/view.php')
      .then((response) => response.json())
      .then((responseJson) => {
        projectArray = responseJson;
      })
  }


  onProjectAdditionOrRemoval(childState) {
    this.setState({ projectList: childState })
  }

  render() {
    return (
      <main id="studAppMain" className="visible">
        <h1 id="title">Apply Internship</h1>
        <ProjectsTable onProjectAdditionOrRemoval={this.onProjectAdditionOrRemoval} />
      </main>
    )
  }
}
export default IntOverview;

