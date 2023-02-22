import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import MainNavigation from './src/navigation/MainNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
