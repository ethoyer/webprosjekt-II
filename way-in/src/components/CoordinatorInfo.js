import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../PostData";
import CompanyList from "./CompanyList";
import StudentList from "./StudentList";
import '../css/coordinator.css';

class CoordinatorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      companyList: ""
    };

    this.getCompanyList = this.getCompanyList.bind(this);
  }
  UNSAFE_componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getCompanyList();
    }
  }

  getCompanyList() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      PostData("companies").then((result) => {
        if (result.companyData) {
          this.setState({ data: result.companyData });
        }
      });
    }
  }

  render() {
    if (!sessionStorage.getItem("userData")) { //if no session storage is set(user not logged in) user will be redirected to the log in page
      return <Redirect to={"/loginPage"} />;
    }

    return (
      <div className="coordinator">
        <h2 className="coordinatorHeader">Company Application overview</h2>
        <div className="divRow">
          <div className="compBASuggestions">
            <h3>Bachelor projects:</h3>
            <CompanyList projectdb='http://localhost/way_in_db/companyBachelorSuggestions.php' />
          </div>
          <div className="compInternshipSuggestions">
            <h3>Internships:</h3>
            <CompanyList projectdb='http://localhost/way_in_db/companyInternshipSuggestions.php' />
          </div>
        </div>
        <h2 className="coordinatorHeader">Student Application overview</h2>
        <div className="divRow">
        <div className="compBASuggestions">
        <h3>Bachelor projects:</h3>
        <StudentList projectdb='http://localhost/way_in_db/studentBachelorApplication.php' />
        </div>
        <div className="compInternshipSuggestions">
        <h3>Internships:</h3>
        <StudentList projectdb='http://localhost/way_in_db/studentInternshipApplication.php' />
        </div>
        </div>
      </div>
    );
  }
}

export default CoordinatorInfo;