import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './components/UI/AppContainer';

import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
