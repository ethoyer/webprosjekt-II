import React from 'react';
import displayProject from './displayProject.js';

class ProjectPreview extends React.Component {
    render() {
        const project = this.props.project;
        return (
          <div className="applyStudent" id={project.id} onClick={(e) => displayProject(e)}>
              <p>{project.title}</p>
              <p>{project.company}</p>
          </div>
        );
      }
  }

  export default ProjectPreview;