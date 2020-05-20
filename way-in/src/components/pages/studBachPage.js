import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import StudBachForm from '../studBachForm.js';
import ProjectOverview from '../projectOverview';
import '../../css/application.css';


class StudBachPage extends React.Component{
    render() {
        return(
        <div>
    <Header />
    <ProjectOverview projectdb='http://localhost/way_in_db/projects.php'
    title="Apply to a Bachelor Project" />
    <StudBachForm />
    <Footer />
  </div>
        )
    }
}

export default StudBachPage;