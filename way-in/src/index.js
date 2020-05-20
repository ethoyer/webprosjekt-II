import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.css'; //common.css is imported here because it is used for all pages
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './components/pages/index.js';
import StudentApplication from './components/pages/studentApplication.js';
import StudInternshipPage from './components/pages/studInternshipPage';
import StudBachPage from './components/pages/studBachPage';
import CompanyApplication from './components/pages/companyApplication.js';
import LogInPage from './components/pages/logInPage';
import CompanyInternshipForm from './components/pages/companyInternshipPage';
import CompanyOfferBachForm from './components/pages/companyBachPage';
import CoordinatorPage from './components/pages/coordinatorPage';

const routing = (
    <Router>
      <div>
        {/* when path is the same as live url the corresponding component is loaded */}
        {/* each component here corresponds to a view in the components/view folder */}
        <Route exact path="/" component={Index} />
        <Route path="/student_application" component={StudentApplication} />
        <Route path="/companyApplyPage" component={CompanyApplication} />
        <Route path="/logInPage" component={LogInPage}/>
        <Route path="/offer_internship" component={CompanyInternshipForm}/>
        <Route path="/offer_bachelor" component={CompanyOfferBachForm}/>
        <Route path="/internship_overview" component={StudInternshipPage} />
        <Route path="/ba_overview" component={StudBachPage} />
        <Route path="/coordinatorPage" component={CoordinatorPage}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();