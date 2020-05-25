import React, { Component } from "react";

class CompanyList extends Component {

  render() {
    let companyList = this.props.companyData.map(function (companyData, index) {
      return (
        <tr className="companies" key={index}>
          <td>{companyData.company_name}</td>
          <td>{companyData.contact_person}</td>
          <td>{companyData.Email}</td>
          <td>{companyData.tel}</td>
        </tr>
      );
    });

    return <table>
      <thead>
        <tr className="aCompany">
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {companyList}
      </tbody>
    </table>
  }
}

export default CompanyList;