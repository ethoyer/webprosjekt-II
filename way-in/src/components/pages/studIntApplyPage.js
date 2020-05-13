import React from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import IntForm from '../intForm';
import IntOverview from '../intoverview';
import '../../css/application.css';


class studIntApplyPage extends React.Component{
  constructor(props) {
    super(props);

  }

    render() {
        return(
        <div>
    <Header />
    <IntOverview intdb='http://192.168.64.2/way_in_db/internships.php'
    title="Apply to an Internship" />
    <IntForm />
    <Footer />
  </div>
        )
    }
}

export default studIntApplyPage;