import React from 'react';

class intern extends React.Component {
  render() {
    return (
      <div className='apply-card'>
        <div className='apply-item'>
          <p>{this.props.name}</p>
          <p>{this.props.place}</p>
        </div>
      </div>
    );
  }
}

export default projectPreview;