import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';

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