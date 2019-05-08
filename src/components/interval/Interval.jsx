import React from "react";
import PropTypes from "prop-types";

/**
 * Interval is an presentational component
 * 
 * params easy to understand props properties validation in the bottom
 */

const Interval = ({interval, isStarted, decrease, increase, isDisabled}) => {
  return (
    <div>
        <span>Интервал обновления секундомера: {interval / 1000} сек.</span>
        {!isStarted && (
            <span>
                <button onClick={decrease} disabled={isDisabled}>-</button>
                <button onClick={increase}>+</button>
            </span>
        )}
    </div>
  );
};

Interval.defaultProps = {
    interval: 1000,
    isStarted: false,
    decrease: ()=>{},
    increase: ()=>{},
    isDisabled: true,
};

Interval.propTypes = {
    interval: PropTypes.number,
    isStarted: PropTypes.bool,
    decrease: PropTypes.func,
    increase: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default Interval;
