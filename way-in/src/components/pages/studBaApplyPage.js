import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import IntForm from '../intForm';
import IntOverview from '../intoverview';
import '../../css/application.css';


class studBaApplyPage extends React.Component{
  constructor(props) {
    super(props);

  }

    render() {
        return(
        <div>
    <Header />
    <IntOverview intdb='http://localhost/way_in_db/projects.php'
    title="Apply to a Bachelor Project" />
    <IntForm />
    <Footer />
  </div>
        )
    }
}

export default studBaApplyPage;