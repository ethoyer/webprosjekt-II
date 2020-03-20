import React from 'react';
import ReactDOM from 'react-dom';
import '../../application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import internData from '../../dummydb.json';
import ProjectInfo from '../projectInfo.js';
import ProjectPreview from '../projectPreview';

class IntOverview extends React.Component{
    render() {
      let projectArray = [];

      {internData.map((project)=>{
        projectArray.push(project);
      })}
      
        return(
        <div>
    <Header />
    <main id="studAppMain">
      <h1 id="title">Apply Internship</h1>
      <div id="overview">
    {projectArray.map((postDetail)=>{
      return <ProjectPreview key={postDetail.id} project={postDetail} />
    })}
    </div>
    <ProjectInfo array={projectArray} />
    </main>
    <Footer />
  </div>
        )
    }
}
export default IntOverview;

