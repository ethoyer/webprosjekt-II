import React from 'react';
import ProjectTable from './projectTable';

class FilterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <>
      <p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="" selected>All locations</option>
          <option value="Oslo">Oslo</option>
          <option value="Trondheim">Trondheim</option>
          <option value="Gjøvik">Gjøvik</option>
        </select>
      </p>
      <ProjectTable parentState = {this.state.value} />
      </>
    )
  }

}

export default FilterButton;