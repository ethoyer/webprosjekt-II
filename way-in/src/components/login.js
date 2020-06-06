import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../PostData";
import '../css/loginForm.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  login() {
    if (this.state.username && this.state.password) {
      PostData(this.state)
      .then(res => {
        let json = res.json();
        if (json.username !== ""){
          sessionStorage.setItem("userData", JSON.stringify(json));
          this.setState({redirectToReferrer: true}); 
        }else{alert("Error")};
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/coordinatorPage"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/coordinatorPage"} />;
    }
    return (
      <div>
        <div className="form">
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="button"
            value="Login"
            onClick={this.login}
          />
        </div>
      </div>
    );
  }
}
export default Login;
