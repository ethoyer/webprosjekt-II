import React, { Component } from "react";

let projectArray = [];

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() { //collects data from database/view.php
    return fetch(this.props.projectdb)
      .then((response) => response.json())
      .then((responseJson) => {
        projectArray = responseJson;
        this.setState({ isLoading: false }); //sets state forcing a reload so collected data is shown
      })
  }

  render() {
    let studentList = projectArray.map(function (studentData, index) {
      return (
        <div className="companies" key={index}>
        <table>
          <thead>
          <tr className="aCompany">
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Programme Code</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{studentData.Fname}</td>
            <td>{studentData.Mname}</td>
            <td>{studentData.Lname}</td>
            <td>{studentData.Email}</td>
            <td>{studentData.programme_code}</td>
          </tr>
          </tbody>
          <thead>
          <tr>
          <th>Project title</th>
          <th>Project Location</th>
          <th>Company</th>
          <th>Company contact</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{studentData.title}</td>
          <td>{studentData.location}</td>
          <td>{studentData.company_name}</td>
          <td>{studentData.company_contact}</td>
        </tr>
        </tbody>
        </table>
        </div>
      );
    });

    return <>
        {studentList}
      </>
  }
}

export default StudentList;