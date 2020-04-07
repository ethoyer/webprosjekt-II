import React from 'react';
import ReactDOM from 'react-dom';
import '../../application.css'; //imports css file only relevant for index
import internData from '../../dummydb.json';
import displayProject from '../displayProject.js';
import ProjectInfo from '../projectInfo.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

var filterData = [
    {
        "id": 1,
        "title": "Front-End Trainee Utvikler",
        "company": "ContaAS",
        "faculty": "AD",
        "location": "Oslo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdiet neque. Proin blandit ornare condimentum. Morbi congue orci tellus, sit amet sodales turpis imperdiet vitae. Morbi nunc ipsum, rutrum et molestie sit amet, tincidunt ut ipsum. Duis cursus, lectus sit amet ullamcorper auctor, odio mauris viverra dolor, nec vehicula lacus justo in lacus. Phasellus fermentum lectus lorem, vitae accumsan felis viverra et. Mauris ac ligula felis. Sed commodo in sapien eu feugiat. Nam lobortis congue dui vel luctus. Nunc id lectus erat. Integer laoreet nisl ac mi eleifend vulputate sed et massa. Nulla dolor diam, placerat sed massa varius, pretium vestibulum urna. Aliquam varius consequat sapien quis ultrices. Aliquam ac tempus metus. Nulla tempor augue ut dui volutpat, at porttitor quam porttitor. Morbi molestie dui in blandit vestibulum."
      },
      {
        "id": 2,
        "title": "UX-designer i Digital Banking Services",
        "company": "Every",
        "faculty": "AD",
        "location": "Trondheim",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdiet neque. Proin blandit ornare condimentum. Morbi congue orci tellus, sit amet sodales turpis imperdiet vitae. Morbi nunc ipsum, rutrum et molestie sit amet, tincidunt ut ipsum. Duis cursus, lectus sit amet ullamcorper auctor, odio mauris viverra dolor, nec vehicula lacus justo in lacus. Phasellus fermentum lectus lorem, vitae accumsan felis viverra et. Mauris ac ligula felis. Sed commodo in sapien eu feugiat. Nam lobortis congue dui vel luctus. Nunc id lectus erat. Integer laoreet nisl ac mi eleifend vulputate sed et massa. Nulla dolor diam, placerat sed massa varius, pretium vestibulum urna. Aliquam varius consequat sapien quis ultrices. Aliquam ac tempus metus. Nulla tempor augue ut dui volutpat, at porttitor quam porttitor. Morbi molestie dui in blandit vestibulum."
      },
      {
        "id": 3,
        "title": "Design Researcher",
        "company": "CISCO",
        "faculty": "HF",
        "location": "Gjøvik",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdiet neque. Proin blandit ornare condimentum. Morbi congue orci tellus, sit amet sodales turpis imperdiet vitae. Morbi nunc ipsum, rutrum et molestie sit amet, tincidunt ut ipsum. Duis cursus, lectus sit amet ullamcorper auctor, odio mauris viverra dolor, nec vehicula lacus justo in lacus. Phasellus fermentum lectus lorem, vitae accumsan felis viverra et. Mauris ac ligula felis. Sed commodo in sapien eu feugiat. Nam lobortis congue dui vel luctus. Nunc id lectus erat. Integer laoreet nisl ac mi eleifend vulputate sed et massa. Nulla dolor diam, placerat sed massa varius, pretium vestibulum urna. Aliquam varius consequat sapien quis ultrices. Aliquam ac tempus metus. Nulla tempor augue ut dui volutpat, at porttitor quam porttitor. Morbi molestie dui in blandit vestibulum."
      }
]
var FilterForm = React.createClass({
    getInitialState: function() {
      return {
        data: this.props.data,
        location: '',
        multiple: false
      }
    },
    checked: function(e) {
      this.setState({multiple: e.target.value});
    },
    filterItems: function(val, type) {
       switch (type) {
        case 'location':
          this.setState({location: val});
          break;
      }
    },
    render: function() {
      var filteredItems = this.props.data;
      var state = this.state;
      var filterProperties = [ "location"];
      filterProperties.forEach(function(filterBy) {
        var filterValue = state[filterBy];
        if (filterValue) {
          filteredItems = filteredItems.filter(function(item) {
            return item[filterBy] === filterValue;
          });
        }
      });
      
      var locationArray = this.props.data.map(function(item) { return item.location });
      locationArray.unshift("");
      
      return (
        <div className="container">
          <FilterOptions 
              data={this.state.data} 
              locationOptions={locationArray}
              changeOption={this.filterItems} />
          <div className="filter-form">
            <FilterItems data={filteredItems} />
          </div>
        </div>
      )
    }
  });

  var FilterOptions = React.createClass({
    changeOption: function(type, e) {
      var val = e.target.value;
      this.props.changeOption(val, type);
    },
    render: function() {
      return (
        <div className="filter-options">
          <div className="filter-option">
            
            <label>Nation</label>
            <select id="nation" value={this.props.nation} onChange={this.changeOption.bind(this, 'nation')}>
            {this.props.nationOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
            
            <label>Show</label>
            <select id="show" value={this.props.show} onChange={this.changeOption.bind(this, 'show')}>
            {this.props.showOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
          </div>
        </div>
      );
    }
  });
  var FilterItems = React.createClass({
    render: function() {
      return (
        <div className="filter-items">
        {this.props.data.map(function(item){
          return (
            <div className="filter-item">{item.name}</div>
          );
        })}
        </div>
      );
    }
  });
  React.render(
    <FilterForm data={filterData} />,
    document.getElementById('filter')
  );
 