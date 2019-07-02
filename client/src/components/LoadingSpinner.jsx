import React from 'react';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="col-md-8 center">
        <BarLoader
          css={override}
          sizeUnit={'px'}
          size={100}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoadingSpinner;
