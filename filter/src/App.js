import React from 'react';
import logo from './logo.svg';
import './App.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : "All"
    }
  }
  onSelectFilter(filter) {
    console.log(filter);
    this.setState({
      selected: filter
    });
  }
  projectFilter(projects) {
    return (this.state.selected === 'All') ? projects : projects.filter(project => project.category === this.state.selected);
  }
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.onSelectFilter(filter)} />
        <ProjectList projects={this.projectFilter(this.props.projects)} />
      </div>
    );
  }
}

const Toolbar = props => {
  const { filters, selected, onSelectFilter } = props;
  const renderFilters = (filters) => {
    return filters.map((filter) => {
      return (
        <button
          onClick={() => onSelectFilter(filter)}>
            {filter}
        </button>
      );
    });
  };

  return (
    <div>
      {renderFilters(filters)}
    </div>
  );
}

const ProjectList = (props) => {
  const { projects } = props;

  const renderProjects = (projects) => {
    return projects.map((project) => {
      return (
        <div>
          <img src={project.img}/>
        </div>
      );
    });
  };

  return (
    <div className="portfolio">
        {renderProjects(projects)}
    </div>
  );
};


export default Portfolio;