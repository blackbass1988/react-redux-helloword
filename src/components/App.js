import React, { Component } from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: props.store.getState().number
    };
  }


  doIncrement() {
    this.props.store.dispatch({type: "INC_ACTION"});
    this.setState({
      number: this.props.store.getState().number
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world. {this.state.number}</h1>
        <button onClick={this.doIncrement.bind(this)}>Click</button>

      </div>

    );
  }
}
