import React, { Component } from "react";
import Interval from "../interval/Interval";
import connect from "../../slomux-library/connect";

class TimerComponent extends Component {
    state = {
        currentTime: 0,
        isTimerStarted: false
    };

    handleStart = () => {
        this.setState({ isTimerStarted: true });
        this.timerInstance = setInterval(() =>
                this.setState({
                    currentTime: this.state.currentTime + this.props.currentInterval
                }),
            this.props.currentInterval
        );
    };

    handleStop = () => {
        this.setState({
                currentTime: 0,
                isTimerStarted: false
            },
            () => clearInterval(this.timerInstance)
        );
    };

    render() {
        const { isTimerStarted, currentTime } = this.state;
        const { currentInterval } = this.props;
        return (
            <div>
                <div style={{ display: isTimerStarted ? "none" :"block"  }}>
                    <Interval />
                </div>
                <div style={{ display: isTimerStarted ? "block" : "none" }}>
                   <span>
                        Интервал обновления секундомера: {currentInterval / 1000} сек.
                   </span>
                </div>
                <div>Секундомер: {currentTime / 1000} сек.</div>
                <div>
                    <button onClick={this.handleStart} disabled={isTimerStarted}>
                       Старт
                    </button>
                    <button onClick={this.handleStop} disabled={!isTimerStarted}>
                       Стоп
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ currentInterval: state })
)(TimerComponent);
