import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import ProjectInfo from '../projectInfo.js';
import ProjectsTable from '../projectsTable';
import AppButton from '../appButton';
import arrowDark from '../../pictures/arrowDark.png';

class IntOverview extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="studAppMain">
    <h1 id="title">Apply Internship</h1>
          <ProjectsTable />
      <AppButton
        id="next"
        location="/"
        label="NEXT"
        />
      <img src={arrowDark} alt="arrow pointing to next page"></img>
    </main>
    
    <Footer /> 
  </div>
        )
    }
}
export default IntOverview;

