import React, { Component } from "react";
import { PostData } from "../PostData";
import CompanyList from "./CompanyList";
import '../css/form.css';

class CoordinatorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
        companyList: "",
        redirectToReferrer: false,
      };
  
      this.getCompanyList = this.getCompanyList.bind(this);
      this.logout = this.logout.bind(this);
    }
  UNSAFE_componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getCompanyList();
    } else {
      this.setState({ redirectToReferrer: true });
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
    return (
        <div>
          <CompanyList companyData={this.state.data} />
        </div>
      );
    }
  }
  
  export default CoordinatorInfo;