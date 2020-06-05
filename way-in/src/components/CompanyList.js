import React, { Component } from "react";

let projectArray = [];

class CompanyList extends Component {
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
    let companyList = projectArray.map(function (companyData, index) {
      return (
        <div className="companies" key={index}>
        <table>
          <thead>
          <tr className="aCompany">
            <th>Title</th>
            <th>Company</th>
            <th>Duration</th>
            <th>Start-date</th>
            <th>Location</th>
          </tr>
          </thead>
          <tbody>
          <tr key={index}>
            <td>{companyData.project_title}</td>
            <td>{companyData.company_name}</td>
            <td>{companyData.project_duration}</td>
            <td>{companyData.start_date}</td>
            <td>{companyData.location}</td>
          </tr>
          </tbody>
          <thead>
          <tr>
          <th>No. of Students</th>
          <th>Contact</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>{companyData.no_of_stud}</td>
          <td>{companyData.contact_person}</td>
          <td>{companyData.phone_no}</td>
          <td>{companyData.email}</td>
        </tr>
        </tbody>
        <thead>
        <tr>
          <th colSpan="5">Description:</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td colSpan="5">{companyData.project_description}</td>
        </tr>
        </tbody>
        </table>
        </div>
      );
    });

    return <>
        {companyList}
      </>
  }
}

export default CompanyList;