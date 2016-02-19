'use strict';

import styles from './skilltablerow.scss';
import React  from 'react';

export default class extends React.Component {
  render() {
    var steps = this.props.steps.map(function(step, index) {
      var classname;
      if (step.isCurrent) {
        classname = 'skilltablerow__step--current';
      }
      else if (step.isDone) {
        classname = 'skilltablerow__step--done';
      }
      else {
        classname = 'skilltablerow__step';
      }
      return <td 
      className={classname} 
      key={index} 
      onClick={this.props.showOverlay(this.props.skillGroup, this.props.skill, step.name, step.text)}>
      {step.name}
      </td>;
    }.bind(this));
    var i;
    var skillGroup;
    if (steps.length < this.props.totalSteps) {
      for(i = steps.length; i < this.props.totalSteps; i++) {
        steps.unshift(<td className="skilltablerow__step--empty"  key={i}></td>);
      }
    }
    if (this.props.rowSpan > 1) {
      skillGroup = <td  className="skilltablerow__skillgroup" rowSpan={this.props.rowSpan}>{this.props.skillGroup}</td>;
    }
    return (<tr key={this.props.key}>
        {skillGroup}
        <td className="skilltablerow__skill">{this.props.skill}</td>
        {steps}
        </tr>);
  }
}
