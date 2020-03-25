import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../studentApplication.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
        <h1 id="studApplicationTitle">Application</h1>
        <h2 id="studApplicationTitle">What are you applying to?</h2>
        <div className="studApplicationButton">
        <Link to="int_overview"><button id="intOrBach">Internship</button></Link>
        <button id="intOrBach">Bachelor</button>
        </div>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;