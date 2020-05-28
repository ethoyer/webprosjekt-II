import React from 'react';
import ProjectsList from './projectsList';
let inProjectList = '';

class FilterProjects extends React.Component {
    constructor(props) {
        super(props);
        this.onProjectListExpansion = this.onProjectListExpansion.bind(this);
        this.parent = props.parent;
        this.state = {
            inProjectList: '',
            childKey: ''
        };
    }

    onProjectListExpansion(childState) {
        inProjectList = childState;
        this.props.onProjectListExpansion(inProjectList);
    }

    render() {
        let filteredArray = []; //holds the filtered project array
        let newInProjectList = this.props.newInProjectList;
        let projectArray = this.props.projectArray;

        projectArray.map((project) => {
            if (this.props.locationState === '' && this.props.facultyState === '') {
                filteredArray.push(project);
            }
            if (this.props.locationState === project.location && this.props.facultyState === '') {
                filteredArray.push(project);
            }
            if (this.props.facultyState === project.faculty && this.props.locationState === '') {
                filteredArray.push(project);
            }
            if (this.props.locationState === project.location && this.props.facultyState === project.faculty) {
                filteredArray.push(project);
            }
        })

        return ( <
            div id = "projectList" > {
                filteredArray.map((project) => { //displays filtered array
                    return <ProjectsList project = { project }
                    key = { project.id }
                    _id = { project.id }
                    grandparent = { this.parent }
                    onProjectListExpansion = { this.onProjectListExpansion }
                    newInProjectList = { newInProjectList }
                    projectArray = { projectArray }
                    />
                })
            } <
            /div>
        );
    };
}

export default FilterProjects;