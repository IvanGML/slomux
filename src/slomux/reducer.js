import { CHANGE_INTERVAL, CHANGE_TIMER_STATE, CHANGE_TIMER_TIME, RESET_INTERVAL } from './constants';

const initialState = {
    interval: 1000,
    timerTime: 0,
    isStarted: false,
}

export default (state = initialState, action) => {
    const { interval, isStarted, timerTime} = action;
    switch (action.type) {
        case CHANGE_INTERVAL:
            return {
                ...state,
                interval: state.interval + interval
            };
        case CHANGE_TIMER_STATE:
            return {
                ...state,
                isStarted
            };
        case CHANGE_TIMER_TIME:
            return {
                ...state,
                timerTime: state.timerTime + timerTime
            };
        case RESET_INTERVAL:
            return {
                ...initialState
            };
        default:
            return state;
    };
};
