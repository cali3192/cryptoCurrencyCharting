import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let myData;

    return (
      <div className="col-md-8">
        <Line
          data={
            (myData = {
              labels: this.props.data.map(d => d.time),
              datasets: [
                {
                  label: 'Bitcoin Price Tracker',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: this.props.data.map(d => d.value),
                },
              ],
            })
          }
        />
      </div>
    );
  }
}
