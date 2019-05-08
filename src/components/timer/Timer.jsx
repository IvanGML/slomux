import React from 'react';
import PropTypes from 'prop-types';
import Interval from '../interval/IntervalContainer';

/**
 * Timer is an presentational component
 * 
 * params easy to understand props properties validation in the bottom
 */
const Timer = ({timerTime, isStarted, start, stop, reset}) => {
    return (
        <div>
            <Interval />
            <div>Секундомер: {timerTime / 1000} сек.</div>
            <div>
                <button onClick={start} disabled={isStarted}>
                   Старт
                </button>
                <button onClick={stop} disabled={!isStarted}>
                   Пауза
                </button>
                <button onClick={reset}>
                   Сбросить
                </button>
            </div>
        </div>
    );
};

Timer.defaultProps = {
    timerTime: 1000,
    isStarted: false,
    start: ()=>{},
    stop: ()=>{},
    reset: ()=>{},
};

Timer.propTypes = {
    timerTime: PropTypes.number,
    isStarted: PropTypes.bool,
    start: PropTypes.func,
    stop: PropTypes.func,
    reset: PropTypes.func,
};

export default Timer;
