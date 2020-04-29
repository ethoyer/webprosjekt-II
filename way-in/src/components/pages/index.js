import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import student from '../../pictures/student_studying.jpg';
import business from '../../pictures/forbusiness_meeting.jpg';


class Studentbutton extends React.Component {

  render() {
    return (
      //changes url
      <div className='student'>
        <Link to="../student_application">
          <img src={student} alt={"student studying"} />
          <div>
            <h2>Apply for an internship programme or bachelor thesis</h2>
            <p>View and apply to an internship or bachelor project here</p>
          </div>
        </Link>

      </div>
    );
  }
}

class Companybutton extends React.Component {

  render() {
    return (
      <div className='business'>
        <Link to="../busApplyPage">
          <div>
            <h2 id="businessStyle">For companies: Would you like to work with our students?</h2>
            <p id="businessStyle">Please fill in an application form for an internship or bachelor project from here.</p>
          </div>
          <img src={business} alt={"workers and students"} />
        </Link>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="indexmain">
          <Studentbutton />
          <Companybutton />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Index;