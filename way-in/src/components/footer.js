import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isFooterVisible: false
  }

  toggleFooter = () => {
    this.setState(prevState => ({ isFooterVisible: !prevState.isVisible }));
  };

  render() {
    const { isFooterVisible } = this.state;

    return (
      <footer onClick={this.toggleFooter} className={ `${isFooterVisible ? "open" : "closed"}` }>
        <img src="" alt=""></img>
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="https://tweetdeck.twitter.com/">Log in</a>
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="https://tweetdeck.twitter.com/">How to use Way-In</a>
        <a className={ `${isFooterVisible ? "open" : "closed"}` } href="https://tweetdeck.twitter.com/">Contact</a>
      </footer>
    );
  }
}

export default Footer;