import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron
    .configure({ host: scriptHostname })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect({ enabled: true, host: scriptHostname, port: 9090});
  tron.clear();
  console.tron = tron;
}
