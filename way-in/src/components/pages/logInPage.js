import React, { Component } from "react";
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
        </main>
        <Footer/>
      </div>
    );
  }
}
export default LoginPage;
