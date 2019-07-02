import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let myData = {
      labels: this.props.data.map(d => d.time),
      datasets: [
        {
          label: 'Bitcoin Price Tracker',
          fill: 'none',
          lineTension: 0,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          pointRadius: 2,
          borderWidth: 1,
          lineTension: 0,
          data: this.props.data.map(d => d.value),
        },
      ],
    };

    const chartOptions = {
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'series',
            time: {
              unit: 'week',
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Closing Price ($)',
            },
            ticks: {
              source: 'auto',
            },
          },
        ],
      },
    };

    return (
      <div className="col-md-8">
        <Line data={myData} options={chartOptions} />
      </div>
    );
  }
}
