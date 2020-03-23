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
    this.setState(prevState => ({ isFooterVisible: !prevState.isFooterVisible }));
  };

  render() {
    const { isFooterVisible } = this.state;

    return (
      <footer onClick={this.toggleFooter} className={ `${isFooterVisible ? "open" : "closed"}` }>
        <img src="" alt=""></img>
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