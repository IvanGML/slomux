import React from 'react';
import { store } from './store';
import Provider from '../slomux/Provider';
import Timer from './timer/Timer';

function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

export default App;
