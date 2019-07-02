import React, { Component } from 'react';
import Chart from './Chart.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Title Component</div>
        <div>Chart Component</div>
        <div>Currency Picker Component</div>
        <div>Coin Picker Component</div>
      </div>
    );
  }
}