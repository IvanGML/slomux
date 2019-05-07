import createStore from '../slomux/createStore';
import reducer from './slomux/reducer';

export const store = createStore(reducer);
