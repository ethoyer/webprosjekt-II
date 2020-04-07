import React from 'react';
import '../../index.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import { Link } from 'react-router-dom';
import student from '../../pictures/student_studying.jpg';
import business from '../../pictures/forbusiness_meeting.jpg';


class Studentbutton extends React.Component {

  render() {
    return (
      //changes url
        <Link to="../student_application">
        <div className='student'>
        <img src={student} alt={"student studying"} />
        <h2>Apply for an internship programme or bachelor thesis</h2>
        <p>View and apply to an internship or bachelor project here</p>
        
      </div>
      </Link>
    );
  }
}

class Companybutton extends React.Component {

  render() {
    return (
      <a href=""><div className='business'>
        <img src={business} alt={"workers and students"} />
        <h2 id="businessStyle">For companies: Would you like to work with our students?</h2>
        <p id="businessStyle">Please fill in an application form for an internship or bachelor project from here.</p>
      </div></a>
    );
  }
}

class Index extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
    <Studentbutton />
    <Companybutton />
    </main>
    <Footer />
  </div>
        )
    }
}

export default Index;