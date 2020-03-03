import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {

    render() {
        return (
          <header>
              <img id="logo" src=""></img>
              <h1>Way In</h1>
          </header>
        );
      }
  }

  class Indexbutton extends React.Component {

    render() {
        return (
          <a href=""><div>
              <img src=""></img>
              <h2>Would you like to work with our students?</h2>
              <p>Text text text text text</p>
          </div></a>
        );
      }
  }

  class Footer extends React.Component {

    render() {
        return (
          <footer>
              <a href="">this is a link</a>
              <a href="">log in</a>
          </footer>
        );
      }
  }

  class Content extends React.Component {
      render (){
          return(
              <div>
                  <Header />
                  <Indexbutton />
                  <Footer />
              </div>
          );
      }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Content />,
    document.getElementById('root')
  );