import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import '../../css/form.css';
import Login from '../login';


class LoginPage extends Component {
render(){
    return (
      <div>
        <Header/>
        <main>
        <Login/>
        <Link to="/userCreatePage">Don't have a account? Register here</Link>
        </main>
        <Footer/>
      </div>
    );
  }
}
export default LoginPage;
