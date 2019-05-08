import React, { Component } from "react";
import Interval from "../interval/Interval";
import connect from "../../slomux-library/connect";
import { changeTimerState, changeTimerTime, resetInterval} from '../../slomux/actions';

class TimerComponent extends Component {

    handleStart = () => {
        const { changeTimerState, interval, changeTimerTime } = this.props;
        changeTimerState(true);
        this.timerInstance = setInterval(
            () => changeTimerTime(interval),
            interval);
    };

    handleStop = () => {
        this.props.changeTimerState(false);
        clearInterval(this.timerInstance);
    };

    handleReset = () => {
        this.props.resetInterval();
        clearInterval(this.timerInstance);
    };

    render() {
        const { isStarted, timerTime } = this.props;
        return (
            <div>
                <Interval />
                <div>Секундомер: {timerTime / 1000} сек.</div>
                <div>
                    <button onClick={this.handleStart} disabled={isStarted}>
                       Старт
                    </button>
                    <button onClick={this.handleStop} disabled={!isStarted}>
                       Пауза
                    </button>
                    <button onClick={this.handleReset}>
                       Сбросить
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        interval: state.interval,
        timerTime: state.timerTime,
        isStarted: state.isStarted,
    }),
    dispatch => ({ 
        changeTimerState: value => dispatch(changeTimerState(value)),
        changeTimerTime: value => dispatch(changeTimerTime(value)),
        resetInterval: () => dispatch(resetInterval()),
    })
)(TimerComponent);
