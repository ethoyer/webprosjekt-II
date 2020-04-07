import React from 'react';
import '../../application.css'; //imports css file only relevant for index
import Header from '../header.js';
import Footer from '../footer.js';
import ProjectsTable from '../projectsTable';

class IntOverview extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="studAppMain">
          <h1 id="title">Apply Internship</h1>
          <ProjectsTable />
        </main>
        <Footer />
      </div>
    )
  }
}
export default IntOverview;