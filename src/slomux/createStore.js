/**
 * validate an action
 */
const validateAction = action => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
      throw new Error('Called action isn\'t an object');
  }
  if (typeof action.type === 'undefined') {
      throw new Error('Action must have a type');
  }
};

const createStore = (reducer) => {
    let currentState = 1000;
    const listeners = [];

    const getState = () => currentState;
    const dispatch = action => {
        validateAction(action);
        currentState = reducer(currentState, action)
        listeners.forEach(listener => listener())
    };

    const subscribe = listener => listeners.push(listener);

    return {
        getState,
        dispatch,
        subscribe
    };
}

export default createStore;