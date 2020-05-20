import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../css/chooseApplication.css';
import ApplicationButton from '../applicationButton.js';

class CompanyApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main id="appchoicemain">
        <h1 id="applicationTitle">Offer a project</h1>
        <h2 id="applicationSubTitle">Which type of project would you like to offer?</h2>
        <ApplicationButton
            id="internshipButton"
            location="/offer_internship"
            label="Internship"/>

        <ApplicationButton
            id="baButton"
            location="/offer_bachelor"
            label="Bachelor Thesis"/>
        <div id="contact">    
            <p>Already offered a project but not yet heard from us?</p>
            <p>Please contact<a href="mailto:admin@ntnu.no"> admin@ntnu.no</a></p>
        </div>
    </main>
    <Footer />
  </div>
        )
    }
}

export default CompanyApplication;