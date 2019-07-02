import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="col-md-8">
        <BounceLoader
          sizeUnit={'px'}
          size={100}
          color={'#ccc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoadingSpinner;
