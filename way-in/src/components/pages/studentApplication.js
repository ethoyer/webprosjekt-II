import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../css/chooseApplication.css';
import ApplicationButton from '../applicationButton.js';

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="appchoicemain">
        <h1 id="applicationTitle">Application</h1>
        <h2 id="applicationSubTitle">What are you applying to?</h2>
        <ApplicationButton
            location="internship_overview"
            label="Internship"
            id="internshipButton"/>

        <ApplicationButton
            location="ba_overview"
            label="Bachelor Thesis"
            id="baButton"/>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;