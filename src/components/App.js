import React, { Component } from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  doIncrement() {
    this.props.store.dispatch({type: "INC_ACTION"});
    console.log(this.props.store.getState());
    this.setState({
      number: this.props.store.getState().number
    })
  }

  render() {
    var state = this.props.store.getState();
    return (
      <div>
        <h1>Hello, world. {state.number}</h1>
        <button onClick={this.doIncrement.bind(this)}>Click</button>

      </div>

    );
  }
}
