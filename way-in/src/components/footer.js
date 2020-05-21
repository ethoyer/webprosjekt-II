import React from 'react';
import arrow from '../pictures/footerArrow.png';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  state = {
    isFooterVisible: false,
    isLoggedIn: false
  }

  componentDidMount() {
    if(this.props.isLoggedIn != ""){ //if a prop is passed change state
    this.setState({ isLoggedIn: this.props.isLoggedIn });
    }
  }

  toggleFooter = () => { //changes state when footer is toggled
    this.setState(prevState => ({ isFooterVisible: !prevState.isFooterVisible }));
  };

  logout() { //clears sessionStorage upon logout
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
  }

  render() {
    const { isFooterVisible } = this.state;
    let button;

    if(this.state.isLoggedIn != true){ //changes button to log out or log in depending on state
      button = <Link to="/logInPage" className={`${isFooterVisible ? "open" : "closed"}`}>Log in</Link>;
    } else if(this.state.isLoggedIn == true){
      button = <Link to="/loginPage" onClick={this.logout} className={`${isFooterVisible ? "open" : "closed"}`}>Log out</Link>;
    }

    return ( // class of footer and items inside change depending on state
      <footer onClick={this.toggleFooter} onKeyPress={this.toggleFooter} className={`${isFooterVisible ? "open" : "closed"}`} tabIndex="0">
        <img src={arrow} alt={""} className={`${isFooterVisible ? "open" : ""}`}></img>
        <div>
          {button}
        </div>
      </footer>
    );
  }
}

export default Footer;