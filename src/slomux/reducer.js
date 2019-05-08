import { CHANGE_INTERVAL } from './constants';

export default (state, action) => {
    switch (action.type) {
        case CHANGE_INTERVAL:
            return state += action.payload;
        default:
            return state;
    };
};
