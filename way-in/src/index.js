import React from 'react';
import ReactDOM from 'react-dom';
import './common.css'; //common.css is imported here because it is used for all pages
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Index from './components/view/index.js';
import StudentApplication from './components/view/studentApplication.js';
import IntOverview from './components/view/intoverview.js';

const routing = (
    <Router>
      <div>
        {/* when path is the same as live url the corresponding component is loaded */}
        {/* each component here corresponds to a view in the components/view folder */}
        <Route exact path="/" component={Index} />
        <Route path="/student_application" component={StudentApplication} />
        <Route path="/int_overview" component={IntOverview} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();