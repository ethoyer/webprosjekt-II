import React from 'react';
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
      <footer onClick={this.toggleFooter} className={ `${isFooterVisible ? "open" : "closed"}` }>
        <img src="" alt=""></img>
        <div>
        <Link to="/logInPage" className={ `${isFooterVisible ? "open" : "closed"}` }>Log in</Link>
        <Link className={ `${isFooterVisible ? "open" : "closed"}` }>How to use Way-In</Link>
        <Link className={ `${isFooterVisible ? "open" : "closed"}` }>Contact</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;