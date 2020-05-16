import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import StudBachForm from '../studBachForm.js';
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
    <IntOverview intdb='http://192.168.64.2/way_in_db/projects.php'
    title="Apply to a Bachelor Project" />
    <StudBachForm />
    <Footer />
  </div>
        )
    }
}

export default studBaApplyPage;