import React from 'react';
import { Link } from 'react-router-dom'

class ApplicationButton extends React.Component {
  render() {
    return (
      <Link to={this.props.location} id={this.props.id}>
        <p>{this.props.label}</p>
      </Link>
    )
  }
}

export default ApplicationButton;
