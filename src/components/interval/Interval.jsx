import React, { Component } from "react";
import connect from "../../slomux-library/connect";
import { changeInterval } from "../../slomux/actions";

class IntervalComponent extends Component {

  increaseInterval = () => this.props.changeInterval(1000);
  decreaseInterval = () => this.props.changeInterval(-1000);

  render() {
    const { interval, isStarted } = this.props;
    const isDisabled = interval <= 1000;
    return (
      <div>
        <span>
          Интервал обновления секундомера: {interval / 1000} сек.
        </span>
        {!isStarted && <span>
          <button onClick={this.decreaseInterval} disabled={isDisabled}>-</button>
          <button onClick={this.increaseInterval}>+</button>
        </span>}
      </div>
    );
  }
}

export default connect(
  ({interval, isStarted}) => ({ interval, isStarted }),
  dispatch => ({ changeInterval: value => dispatch(changeInterval(value))})
)(IntervalComponent);
