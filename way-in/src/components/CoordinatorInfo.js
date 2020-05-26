import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../PostData";
import CompanyList from "./CompanyList";
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
          console.log(this.state);
        }
      });
    }
  }

  render() {
    if (!sessionStorage.getItem("userData")) { //if no session storage is set(user not logged in) user will be redirected to the log in page
      return <Redirect to={"/loginPage"} />;
    }

    return (
        <div>
          <CompanyList companyData={this.state.data} />
        </div>
      );
    }
  }
  
  export default CoordinatorInfo;