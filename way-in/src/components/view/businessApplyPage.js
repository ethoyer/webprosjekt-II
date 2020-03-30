import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../../chooseApplication.css';
import AppButton from '../appButton.js';

class StudentApplication extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <main>
        <h1 id="applicationTitle">Offer a project</h1>
        <h2 id="applicationTitle">Which type of project would you like to offer?</h2>
        <AppButton
            id="intOrBach"
            location="/"
            label="Internship"/>

        <AppButton
            id="intOrBach"
            location="/"
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

export default StudentApplication;