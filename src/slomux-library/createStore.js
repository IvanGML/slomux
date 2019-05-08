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

const createStore = reducer => {
    let currentState;
    const subscribers = [];
    const dispatch = action => {
        validateAction(action);
        currentState = reducer(currentState, action);
        subscribers.forEach(callback => callback());
    }
    const getState = () => currentState;
    const subscribe = callback => {
        subscribers.push(callback);
        return () => subscribers.filter(cb => cb !== callback);
    }
    dispatch({
        type: 'initialize'
    });
    return {
        getState,
        dispatch,
        subscribe
    };
};


export default createStore;