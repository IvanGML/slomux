import React, { Component } from 'react';
import Timer from './Timer';
import connect from '../../slomux-library/connect';
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
            <Timer
                timerTime={timerTime}
                isStarted={isStarted}
                start={this.handleStart}
                stop={this.handleStop}
                reset={this.handleReset}
            />
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
