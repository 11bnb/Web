import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import env from '../libs/os';
import '../style'
import '../../mobile/libs/scale';

export default class App extends Component {
  render() {
    return (
      <div className={classnames(env)}>
        {this.props.children}
      </div>
    )
  }
}
