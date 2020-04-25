import React from 'react';
import arrow from '../pictures/footerArrow.png';

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
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="">Log in</a>
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="">How to use Way-In</a>
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="">Contact</a>
        </div>
      </footer>
    );
  }
}

export default Footer;