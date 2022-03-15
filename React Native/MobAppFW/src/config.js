import React from 'react';
import { logger } from 'react-native-logs';
import { consoleTransport } from 'react-native-logs/dist/transports/consoleTransport';
import InfoToast from 'react-native-toast-message/src/components/info';
import SuccessToast from 'react-native-toast-message/src/components/success';
import ErrorToast from 'react-native-toast-message/src/components/error';

var log = logger.createLogger({
    transport: consoleTransport,
});

if (__DEV__) {
    log.setSeverity('debug');
} else {
    log.setSeverity('error');
}

export { log };

const toastConfig = {
    success: ({ hide, ...rest }) => (
        <SuccessToast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    ),
    error: ({ hide, ...rest }) => (
        <ErrorToast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    ),
    info: ({ hide, ...rest }) => (
        <InfoToast {...rest} onTrailingIconPress={hide} text1NumberOfLines={2} />
    )
};

export { toastConfig };

export default {
    apiServer: {
        url: 'https://cdn-api.co-vin.in/api/v2'
        // url: 'http://172.104.61.150/edge-eye-wms-camera/api/web/v1',
        // url: 'http://192.168.39.152:3000',
        // url: 'https://treatlan-app.herokuapp.com/api/building'
    },
    authServer: {
        url: 'https://coronavirus-tracker-api.herokuapp.com'
    },
};