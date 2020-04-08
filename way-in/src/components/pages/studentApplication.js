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
    <main>
        <h1 id="applicationTitle">Application</h1>
        <h2 id="applicationTitle">What are you applying to?</h2>
        <AppButton
            id="intOrBach"
            location="int_overview"
            label="Internship"/>

        <AppButton
            id="intOrBach"
            location="/intForm"
            label="Bachelor Thesis"/>
    </main>
    <Footer />
  </div>
        )
    }
}

export default StudentApplication;