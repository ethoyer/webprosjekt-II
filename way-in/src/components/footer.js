import React from 'react';
import arrow from '../pictures/footerArrow.png';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  state = {
    isFooterVisible: false
  }

  toggleFooter = () => {
    this.setState(prevState => ({ isFooterVisible: !prevState.isFooterVisible }));
  };

  render() {
    const { isFooterVisible } = this.state;

    return (
      <footer onClick={this.toggleFooter} onKeyPress={this.toggleFooter} className={ `${isFooterVisible ? "open" : "closed"}` } tabIndex="0">
        <img src={arrow} alt={""} className={ `${isFooterVisible ? "open" : ""}` }></img>
        <div>
        <Link to="/logInPage" className={ `${isFooterVisible ? "open" : "closed"}` }>Log in</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;