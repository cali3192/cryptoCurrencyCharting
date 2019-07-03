import React, { Component, Fragment } from 'react';
import LineChart from './LineChart.jsx';
import Axios from 'axios';
import LoadingSpinner from './LoadingSpinner.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: [],
    };
    this.getBTC = this.getBTC.bind(this);
    this.getETH = this.getETH.bind(this);
    this.getXRP = this.getXRP.bind(this);
    this.getBCH = this.getBCH.bind(this);
    this.getEOS = this.getEOS.bind(this);
  }

  componentDidMount() {
    this.getBTC();
  }

  getBTC() {
    Axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
      .then(({ data }) => {
        this.setState({
          rate: data.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getETH() {
    Axios.get('https://api.coincap.io/v2/assets/ethereum/history?interval=d1')
      .then(({ data }) => {
        this.setState({
          rate: data.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getXRP() {
    Axios.get('https://api.coincap.io/v2/assets/ripple/history?interval=d1')
      .then(({ data }) => {
        this.setState({
          rate: data.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getBCH() {
    Axios.get(
      'https://api.coincap.io/v2/assets/bitcoin-cash/history?interval=d1'
    )
      .then(({ data }) => {
        this.setState({
          rate: data.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getEOS() {
    Axios.get('https://api.coincap.io/v2/assets/eos/history?interval=d1')
      .then(({ data }) => {
        this.setState({
          rate: data.data,
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
          {this.state.rate.length > 0 ? (
            <LineChart data={this.state.rate} />
          ) : (
            <LoadingSpinner />
          )}
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-auto">
              <div className="btn-group" role="group" aria-label="Crypto Coins">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getBTC}>
                  Bitcoin
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getETH}>
                  Ethereum
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getXRP}>
                  XRP
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getBCH}>
                  Bitcoin Cash
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getEOS}>
                  EOS
                </button>
              </div>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </Fragment>
    );
  }
}
