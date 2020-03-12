import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import student from './pictures/student_studying.jpg';
import business from './pictures/forbusiness_meeting.jpg';



class Studentbutton extends React.Component {

  render() {
    /*const studBusiness = [
      {
        name: 'students',
        image: ''
      }
    ]*/
    return (
      <a href=""><div className='student'>
        <img src={student} alt={"student studying"} />
        <h2>Apply for an internship programme or bachelor thesis</h2>
        <p>View and apply to an internship or bachelor project here</p>
      </div></a>
    );
  }
}

class Companybutton extends React.Component {

  render() {
    return (
      <a href=""><div className='business'>
        <img src={business} alt={"workers and students"} />
        <h2>For companies: Would you like to work with our students?</h2>
        <p>Please fill in an application form for an internship or bachelor project from here.</p>
      </div></a>
    );
  }
}

// ========================================

ReactDOM.render(
  <div>
    <Header />
    <main>
    <Studentbutton />
    <Companybutton />
    </main>
    <Footer />
  </div>,
  document.getElementById('root')
);