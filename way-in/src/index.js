import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

class Studentbutton extends React.Component {

  render() {
    return (
      <a href=""><div>
        <img src=""></img>
        <h2>Apply for an internship programme or bachelor thesis</h2>
        <p>Text text text text text</p>
      </div></a>
    );
  }
}

class Companybutton extends React.Component {

  render() {
    return (
      <a href=""><div>
        <img src=""></img>
        <h2>Would you like to work with our students?</h2>
        <p>Text text text text text</p>
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