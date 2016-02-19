'use strict';

import React  from 'react';
import styles from './overlay.scss';

export default class Overlay extends React.Component {
  render() {
    let classname = 'overlay';
    classname += this.props.isVisible ? ' is-visible' : '';
    return(<div onClick={this.props.close} className={classname}>
        <h1>Skill Category: {this.props.skillCategory}</h1>
        <h2>Skill name: {this.props.skillName}</h2>
        <h2>Skill step: {this.props.skillStep}</h2>
        <p>{this.props.text}</p>
        </div>);
  }
}
