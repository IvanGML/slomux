import React, { Component } from "react";
import connect from "../../slomux-library/connect";
import { changeInterval } from "../slomux/actions";

class IntervalComponent extends Component {

  increaseInterval = () => this.props.changeInterval(1000);
  decreaseInterval = () => this.props.changeInterval(-1000);

  render() {
    const { currentInterval } = this.props;
    const isDisabled = currentInterval <= 1000;
    return (
      <div>
        <span>
          Интервал обновления секундомера: {currentInterval / 1000} сек.
        </span>
        <span>
          <button onClick={this.decreaseInterval} disabled={isDisabled}>-</button>
          <button onClick={this.increaseInterval}>+</button>
        </span>
      </div>
    );
  }
}

const Interval = connect(
  state => ({
    currentInterval: state
  }),
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value))
  })
)(IntervalComponent);

export default Interval;
