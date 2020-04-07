import React from 'react';
import logo from '../pictures/wayin_logo.png';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
          <header>
              <Link to="/">
              <img src={logo} className="logo" alt={"way in logo"} />
              </Link>
              <h1>Way In</h1>
          </header>
        );
      }
  }

  export default Header;