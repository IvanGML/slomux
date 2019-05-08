import React from 'react';
import store from '../slomux/store';
import Provider from '../slomux-library/Provider';
import Timer from './timer/TimerContainer';

function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

export default App;
