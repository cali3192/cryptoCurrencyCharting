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
    this.getLTC = this.getLTC.bind(this);
    this.getBCH = this.getBCH.bind(this);
  }

  componentDidMount() {
    this.getBTC();
  }

  getBTC() {
    Axios.get('/coin/bitcoin')
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
    Axios.get('/coin/ethereum')
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
    Axios.get('/coin/ripple')
      .then(({ data }) => {
        this.setState({
          rate: data.data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getLTC() {
    Axios.get('/coin/litecoin')
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
    Axios.get('/coin/bitcoin-cash')
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
            <div className="col-md-1" />
            <div className="col-md-auto">
              <div className="btn-group" role="group" aria-label="Crypto Coins">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getBTC}>
                  Bitcoin (BTC)
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getETH}>
                  Ethereum (ETH)
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getXRP}>
                  Ripple XRP (XRP)
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getLTC}>
                  Litecoin (LTC)
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getBCH}>
                  Bitcoin Cash (BCH)
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
