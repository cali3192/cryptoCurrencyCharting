import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let myData = {
      labels: this.props.data.map(d => d.date),
      datasets: [
        {
          label: 'Price',
          fill: 'none',
          backgroundColor: '#123abc',
          borderColor: '#123abc',
          pointRadius: 0,
          lineTension: 1,
          borderWidth: 3,
          data: this.props.data.map(d => d.priceUsd),
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'series',
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
      <div className="col-8">
        <Line data={myData} options={chartOptions} />
      </div>
    );
  }
}
