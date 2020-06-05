import React, { Component } from "react";

class CompanyList extends Component {

  render() {
    let companyList = this.props.companyData.map(function (companyData, index) {
      return (
        <tr className="companies" key={index}>
          <td>{companyData.project_title}</td>
          <td>{companyData.company_name}</td>
          <td>{companyData.project_description}</td>
          <td>{companyData.project_duration}</td>
          <td>{companyData.start_date}</td>
          <td>{companyData.location}</td>
          <td>{companyData.no_of_stud}</td>
          <td>{companyData.contact_person}</td>
          <td>{companyData.phone_no}</td>
          <td>{companyData.email}</td>
        </tr>
      );
    });

    return <div className="coordinator">
    <h2>Company overview</h2>
    <table>
      <thead>
        <tr className="aCompany">
          <th>Title</th>
          <th>Company</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Start-date</th>
          <th>Location</th>
          <th>No. of Students</th>
          <th>Contact</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {companyList}
      </tbody>
    </table>
    </div>
  }
}

export default CompanyList;