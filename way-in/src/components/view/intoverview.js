import React from 'react';
import ReactDOM from 'react-dom';
import '../../application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import internData from '../../dummydb.json';
import displayProject from '../displayProject.js';
import ProjectInfo from '../projectInfo.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
let rows = [];

class IntOverview extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="studAppMain">
      <h1 id="title">Apply Internship</h1>
      <div id="overview" onClick={(e) => displayProject(e)}>
    {internData.map((postDetail, index)=>{
      return <div className='applyStudent' id={postDetail.id}>
        <p>{postDetail.title}</p>
        <p>{postDetail.company}</p>
        </div>
    })}
    </div>
    <ProjectInfo />
    </main>
    <Footer />
  </div>
        )
    }
}
export default IntOverview;

