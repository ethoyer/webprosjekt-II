import React from 'react';
import ReactDOM from 'react-dom';
import '../../application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import internData from '../../dummydb.json';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class IntOverview extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
      <h1>Apply Internship</h1>
    {internData.map((postDetail, index)=>{
      return <div class='applyStudent'>
        <p>{postDetail.title}</p>
        <p>{postDetail.company}</p>
        </div>
    })}
    </main>
    <Footer />
  </div>
        )
    }
}
export default IntOverview;

