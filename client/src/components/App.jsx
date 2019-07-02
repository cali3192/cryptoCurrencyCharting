import React, { Component, Fragment } from 'react';
import LineChart from './LineChart.jsx';
import Currency from './Currency.jsx';
import Axios from 'axios';
import LoadingSpinner from './LoadingSpinner.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: '',
    };
  }

  componentDidMount() {
    Axios.get(
      'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05'
    )
      .then(({ data }) => {
        let dataArr = [];
        let dates = Object.keys(data.bpi);
        let values = Object.values(data.bpi);
        for (let i = 0; i < dates.length; i++) {
          dataArr.push({
            time: dates[i],
            value: values[i],
          });
        }
        this.setState({
          prices: dataArr,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar static-top navbar-light bg-light">
          <a className="navbar-brand" href="#">
            CryptoCurrency Checker
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            {this.state.prices.length > 0 ? (
              <LineChart data={this.state.prices} />
            ) : (
              // <Line
              //   data={
              //     (myData = {
              //       labels: this.state.prices.map(d => d.time),
              //       datasets: [
              //         {
              //           label: 'My first dataset',
              //           backgroundColor: 'rgb(255, 99, 132)',
              //           borderColor: 'rgb(255, 99, 132)',
              //           data: this.state.prices.map(d => d.value),
              //         },
              //       ],
              //     })
              //   }
              // />
              <LoadingSpinner />
            )}
            <Currency />
          </div>
          <div>Powered by CoinDesk</div>
          <div>Coin Picker Component</div>
        </div>
      </Fragment>
    );
  }
}
