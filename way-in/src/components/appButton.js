import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

class ApplicationButton extends React.Component{
    render() {
        return (
            <Link to={this.props.location}>
                <p>{this.props.label}</p>
            </Link>
        )
    }
}

export default ApplicationButton;
