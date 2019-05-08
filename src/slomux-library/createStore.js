/**
 * validate an action creator. it should be object with required property 'type'
 */
const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Called action isn\'t an object');
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type');
    }
};

/**
 * @param {function} reducer - pure function that describe how to handle any action
 * 
 * createStore function return 3 methods that get, change and subsribe slomux store
 */
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
        return () => subscribers.filter(cb => cb !== callback);// return unsubscribe function
    }
    dispatch({//to set initial state reducer should be called once
        type: 'initialize'
    });
    return {
        getState,
        dispatch,
        subscribe
    };
};


export default createStore;