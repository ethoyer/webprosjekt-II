import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {

    render() {
        return (
          <header>
              <h1>Way In</h1>
          </header>
        );
      }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Header />,
    document.getElementById('root')
  );

  //HELOOOOOOOOOOOOOOOO!