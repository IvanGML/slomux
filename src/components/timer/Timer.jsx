import React from "react";
import Interval from "../interval/Interval";
import connect from "../../slomux/connect";

class TimerComponent extends React.PureComponent {
    state = {
        currentTime: 0,
        isTimerStarted: false
    };

    render() {
        const { isTimerStarted, currentTime } = this.state;
        const { currentInterval } = this.props;
        return (
            <div>
                <div style={{ display: !isTimerStarted ? "block" : "none" }}>
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
}

export default connect(
    state => ({
        currentInterval: state
    }),
    () => {}
)(TimerComponent);
