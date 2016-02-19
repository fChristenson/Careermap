'use strict';

import React  from 'react';
import styles from './overlay.scss';

export default class Overlay extends React.Component {
  render() {
    let classname = 'overlay';
    classname += this.props.isVisible ? ' is-visible' : '';
    return(<div onClick={this.props.close} className={classname}>
        <h1>{this.props.header}</h1>
        <p>{this.props.text}</p>
        </div>);
  }
}
