import { SafeAreaProvider } from 'react-native-safe-area-context';
import BareProvider from './src/ui/component/BareProvider';
import HomeScreen from './src/ui/screen/HomeScreen';
import { rpcHandler } from './src/lib/rpc';
import { Provider } from 'react-redux';
import store from './src/store/index';

const App = () => {
  return (
    <BareProvider rpcHandler={rpcHandler}>
      <Provider store={store}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </Provider>
    </BareProvider>
  );
};

export default App;
