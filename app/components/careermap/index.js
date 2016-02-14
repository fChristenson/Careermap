'use strict';

import React      from 'react';
import SkillTable from '../skillTable';
import styles     from './careermap.scss';

export default class Careermap extends React.Component {

  getStepClassName(index) {
    var halfIndex = Math.floor((this.props.steps.length - 1) / 2);
    if (index === halfIndex || index === halfIndex - 1 || index === halfIndex + 1) {
      return 'careermap__midsteps';
    } else if (index < halfIndex) {
      return 'careermap__startsteps';
    } else {
      return 'careermap__endsteps';
    }
  }

  getSteps() {
    return this.props.steps.map(function(step, index) {
      var classname = this.getStepClassName(index);
      return <th key={index} className={classname}><div>Step {index + 1}</div><div>{step.name}</div></th>;
    }.bind(this));
  }

  renderSkillTables() {
    return this.props.categories.map(function(category, index) {
      return <SkillTable key={index} category={category} steps={this.props.steps} />;
    }.bind(this));

  }

  getFocuses() {
    return this.props.steps.map(function(step, index) {
      return <th className="careermap__definition" key={index}><div className="careermap__definitiontext">{step.focus}</div></th>;
    });
  }

  getExperiences() {
    return this.props.steps.map(function(step, index) {
      return <th className="careermap__definition" key={index}>{<div className="careermap__definitiontext">{step.experience}</div>}</th>;
    });
  }

  getTitles() {
    return this.props.steps.map(function(step, index) {
      var classname = this.getStepClassName(index);
      return <th className={classname} key={index}>{step.title}</th>;
    }.bind(this));
  }

  render() {
    return (
        <div>
        <table className="careermap">
        <thead>
        <tr>
        <th className="careermap__name" rowSpan="4">{this.props.name}</th>
        <th className="careermap__stepheader">
        <div>Ladder Position</div>
        <div>Key Name</div>
        </th>
        {this.getSteps()}
        </tr>
        <tr>
        <th className="careermap__stepheader">Title</th>
        {this.getTitles()}
        </tr>
        <tr>
        <th className="careermap__stepheader">Focus</th>
        {this.getFocuses()}
        </tr>
          <tr>
          <th className="careermap__stepheader">Experience</th>
          {this.getExperiences()}
        </tr>
          <tr>
          <th className="careermap__categoryheader">Knowledge Area</th>
          <th className="careermap__categoryheader">Competency</th>
          <th className="careermap__capabillity" colSpan={this.getSteps().length}>Capabillity Mapping</th>
          </tr>
          </thead>
          </table>
          {this.renderSkillTables()}
        </div>
          );
  }
};
