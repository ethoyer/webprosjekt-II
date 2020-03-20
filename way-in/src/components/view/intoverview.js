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
        return(
        <div>
    <Header />
    <main id="studAppMain">
      <h1 id="title">Apply Internship</h1>
      <div id="overview">
    {internData.map((postDetail)=>{
      return <ProjectPreview key={postDetail.id} project={postDetail} />
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

