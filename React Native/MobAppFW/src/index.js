import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Root } from 'native-base';
import Toast from 'react-native-toast-message';

import { toastConfig } from './config';
import { store, rootSaga } from './redux';
import { AppNavigation } from './navigation';

store.runSaga(rootSaga);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Root>
                    <AppNavigation />
                    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
                </Root>
            </SafeAreaProvider>
        </Provider>
    );
}   