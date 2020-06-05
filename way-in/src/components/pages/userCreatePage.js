import React, { Component } from "react";
import Header from '../header';
import Footer from '../footer';
import '../../css/form.css';
import CreateUser from '../createUser';

class UserCreate extends Component {
render(){
    return (
      <div>
        <Header/>
        <main>
        <CreateUser/>
        </main>
        <Footer/>
      </div>
    );
  }
}
export default UserCreate;
