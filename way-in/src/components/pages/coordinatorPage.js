import React, { Component } from "react";
import Header from '../header';
import Footer from '../footer';
import CoordinatorInfo from "../CoordinatorInfo";

class coordinatorPage extends Component {
render(){
    return (
      <div>
        <Header/>
            <main>
                <CoordinatorInfo/>
            </main>
        <Footer/>
      </div>
    );
  }
}
export default coordinatorPage;
