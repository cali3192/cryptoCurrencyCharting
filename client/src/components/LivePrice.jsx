import React, { Component } from 'react';
import Axios from 'axios';

export default class LivePrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getLivePrices();
    this.intervalID = setInterval(() => this.getLivePrices(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getLivePrices() {
    Axios.get('https://api.coincap.io/v2/assets').then(({ data }) => {
      let rankedCoins = data.data;
      let topFiveCoins = rankedCoins.slice(0, 5);

      this.setState({
        coins: topFiveCoins,
      });
    });
  }

  render() {
    return (
      <div className="col-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coins.map(coin => (
              <tr key={coin.rank}>
                <th scope="row">{coin.rank}</th>
                <td>{coin.name}</td>
                <td>{'$' + Number(coin.priceUsd).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
