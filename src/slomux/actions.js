import { CHANGE_INTERVAL, CHANGE_TIMER_STATE, CHANGE_TIMER_TIME, RESET_INTERVAL } from './constants';

const changeInterval = value => ({
    type: CHANGE_INTERVAL,
    interval: value,
});

const changeTimerState = value => ({
    type: CHANGE_TIMER_STATE,
    isStarted: value,
});

const changeTimerTime = value => ({
    type: CHANGE_TIMER_TIME,
    timerTime: value,
});

const resetInterval = () => ({
    type: RESET_INTERVAL,
});

export {
    changeInterval,
    changeTimerState,
    changeTimerTime,
    resetInterval,
}