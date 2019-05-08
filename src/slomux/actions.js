import { CHANGE_INTERVAL, CHANGE_TIMER_STATE, CHANGE_TIMER_TIME, RESET_INTERVAL } from './constants';

/**
 * action creators - return an object that describe type of action and pass some data
 * 
 * @param {any} value - payload
 */

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
};
