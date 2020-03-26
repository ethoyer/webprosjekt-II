import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../studentApplication.css';
import AppButton from '../appButton.js';

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="intOrBach">
        <h1 id="studApplicationTitle">Application</h1>
        <h2 id="studApplicationTitle">What are you applying to?</h2>
        <AppButton
            location="int_overview"
            label="Internship"/>

        <AppButton
            location="/"
            label="Bachelor Thesis"/>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;