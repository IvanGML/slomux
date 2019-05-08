import { CHANGE_INTERVAL } from './constants';

export const changeInterval = value => ({
    type: CHANGE_INTERVAL,
    payload: value,
})