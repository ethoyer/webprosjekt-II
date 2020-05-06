import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.css'; //common.css is imported here because it is used for all pages
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './components/pages/index.js';
import StudentApplication from './components/pages/studentApplication.js';
import studIntApplyPage from './components/pages/studIntApplyPage';
import studBaApplyPage from './components/pages/studBaApplyPage';
import busApplyPage from './components/pages/busApplyPage.js';
import logInPage from './components/pages/logInPage';
import busApplyIntPage from './components/pages/busApplyIntPage';
import busApplyBachPage from './components/pages/busApplyBachPage';

const routing = (
    <Router>
      <div>
        {/* when path is the same as live url the corresponding component is loaded */}
        {/* each component here corresponds to a view in the components/view folder */}
        <Route exact path="/" component={Index} />
        <Route path="/student_application" component={StudentApplication} />
        <Route path="/busApplyPage" component={busApplyPage} />
        <Route path="/logInPage" component={logInPage}/>
        <Route path="/busApplyIntPage" component={busApplyIntPage}/>
        <Route path="/busApplyBachPage" component={busApplyBachPage}/>
        <Route path="/int_overview" component={studIntApplyPage} />
        <Route path="/ba_overview" component={studBaApplyPage} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();