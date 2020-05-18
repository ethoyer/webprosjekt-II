import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/loginPage"} />;
    }

    return (
        <div>
          <button href="#" onClick={this.logout} className="logout">
            Logout
          </button>
          <CompanyList companyData={this.state.data} />
        </div>
      );
    }
  }
  
  export default CoordinatorInfo;