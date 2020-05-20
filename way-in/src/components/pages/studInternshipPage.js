import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import InternshipForm from '../internshipForm';
import ProjectOverview from '../projectOverview.js';
import '../../css/application.css';


class StudInternshipPage extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <ProjectOverview projectdb='http://localhost/way_in_db/internships.php'
    title="Apply to an Internship" />
    <InternshipForm />
    <Footer />
  </div>
        )
    }
}

export default StudInternshipPage;