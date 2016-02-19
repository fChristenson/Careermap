'use strict';

import React         from 'react';
import styles        from './skilltable.scss';
import SkillTableRow from '../../containers/skillTableRow';

export default class extends React.Component {
  render() {
    var rows = [];
    this.props.category.groups.forEach(function(group) {
      group.skills.forEach(function(skill, index) {
        if (index === 0) {
          rows.push(<SkillTableRow 
              key={Math.random()} 
              steps={skill.steps} 
              totalSteps={this.props.steps.length}
              skillGroup={group.groupName} 
              skill={skill.name} 
              rowSpan={group.skills.length} />);
        }
        else {
          rows.push(<SkillTableRow 
              key={Math.random()} 
              steps={skill.steps} 
              totalSteps={this.props.steps.length}
              skillGroup={group.groupName} 
              skill={skill.name} 
              rowSpan={1} />);
        }
      }.bind(this)); 
    }.bind(this));
    return (
        <table className="skilltable" key={this.props.key}>
        <thead>
        <tr>
        <th className="skilltable__header" colSpan={this.props.steps.length + 2}>{this.props.category.categoryName}</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        </table>
        );
  }
}
