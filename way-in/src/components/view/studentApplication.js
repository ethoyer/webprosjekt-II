import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header.js';
import Footer from '../footer.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
        <h1>Application</h1>
        <h2>What are you applying to?</h2>
        <Link to="int_overview"><a href="">Internship</a></Link>
        <a href="">Bachelor</a>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;