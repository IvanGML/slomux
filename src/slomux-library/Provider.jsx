import React from 'react';
import PropTypes from 'prop-types';

/**
 * define Provider component that set inner property 'store'.
 * 
 * 'store' will be passed to each children inside 'context' property 
 * if childContextTypes with 'store: PropTypes.object' has been defined
 */
class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;
