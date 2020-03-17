import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../pictures/wayin_logo.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
          <header>
              <Link to="/">
              <img src={logo} class="logo" alt={"way in logo"} />
              </Link>
              <h1>Way In</h1>
          </header>
        );
      }
  }

  export default Header;