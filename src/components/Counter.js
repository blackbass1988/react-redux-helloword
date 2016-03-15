import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import * as Actions from '../actions';


export default class Counter extends React.Component {

  doIncrement() {
    this.props.inc();
  }

  render() {
    return (
      <div>
        <h1>Hello, world. {this.props.number}</h1>
        <button onClick={this.doIncrement.bind(this)}>Click</button>
      </div>
    );
  }
}
