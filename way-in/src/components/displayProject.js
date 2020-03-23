import React from 'react';
import internData from '../dummydb.json';

class AddProject extends React.Component {
  render() {
      const project = this.props.project;
      return (
        <button className={project.id}>Add Project</button>
      );
    }
}

function displayProject(e) {

  {internData.map((postDetail) => {
      if (e.target.parentElement.id == postDetail.id || e.target.id == postDetail.id) {
        document.getElementById("projectbutton").innerHTML = "Add Project";
      document.getElementById("projecttitle").innerHTML = postDetail.title;
      document.getElementById("full").className = postDetail.id;
      document.getElementById("company").innerHTML = postDetail.company;
      document.getElementById("faculty").innerHTML = postDetail.faculty;
      document.getElementById("location").innerHTML = postDetail.location;
      document.getElementById("desc").innerHTML = postDetail.description;
      }
    })
  }

}

export default displayProject;