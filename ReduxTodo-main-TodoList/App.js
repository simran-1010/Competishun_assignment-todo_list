import React from 'react';
import TodoList from './src/screen/TodoList';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/store';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <TodoList />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
