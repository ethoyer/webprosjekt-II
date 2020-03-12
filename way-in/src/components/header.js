import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../pictures/wayin_logo.png';

class Header extends React.Component {
    render() {
        return (
          <header>
              <img src={logo} alt={"way in logo"} />
              <h1>Way In</h1>
          </header>
        );
      }
  }

  export default Header;