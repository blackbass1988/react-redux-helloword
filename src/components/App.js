import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import * as Actions from '../actions';

import Counter from './Counter';

export default class App extends React.Component {


  render() {
    return (
      <div>
        <Counter number={this.props.COUNTER[0].number} inc={() => {this.props.actions.inc(0)}} />
        <Counter number={this.props.COUNTER[1].number} inc={() => {this.props.actions.inc(1)}} />
      </div>
    );
  }
}

function mapStateToProps(state)  {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
