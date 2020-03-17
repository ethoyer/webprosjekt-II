import React from 'react';
import ReactDOM from 'react-dom';
import '../../application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class IntOverview extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
    <p>nothing here yet!!</p>
    </main>
    <Footer />
  </div>
        )
    }
}

export default IntOverview;