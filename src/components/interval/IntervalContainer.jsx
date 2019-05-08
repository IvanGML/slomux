import React, { Component } from 'react';
import connect from '../../slomux-library/connect';
import { changeInterval } from '../../slomux/actions';
import Interval from './Interval';

class IntervalComponent extends Component {

  increaseInterval = () => this.props.changeInterval(1000);
  decreaseInterval = () => this.props.changeInterval(-1000);

  render() {
    const { interval, isStarted } = this.props;
    const isDisabled = interval <= 1000;
    return (
      <Interval 
        interval={interval}
        isStarted={isStarted}
        decrease={this.decreaseInterval}
        increase={this.increaseInterval}
        isDisabled={isDisabled}
      />
    );
  }
}

export default connect(
  ({interval, isStarted}) => ({ interval, isStarted }),
  dispatch => ({ changeInterval: value => dispatch(changeInterval(value))})
)(IntervalComponent);
