import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../css/chooseApplication.css';
import AppButton from '../appButton.js';

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="appchoicemain">
        <h1 id="applicationTitle">Application</h1>
        <h2 id="applicationSubTitle">What are you applying to?</h2>
        <AppButton
            location="int_overview"
            label="Internship"
            id="intButton"/>

        <AppButton
            location="/intForm"
            label="Bachelor Thesis"
            id="baButton"/>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;