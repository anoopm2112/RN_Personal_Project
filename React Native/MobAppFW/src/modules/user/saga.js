import { all, takeLatest, fork, take, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import { saga, actions as CommonActions } from '../../common';
import { types as ActionTypes } from './actions';
import * as Actions from './actions';
import * as DashboardActions from '../dashboard/actions';
import * as UserAPI from './api';
import { AUTH_DATA_STORE_KEY, USER_INFO_STORE_KEY, PINCODE_STORE_KEY } from './constants';

const { types: CommonActionTypes } = CommonActions;

function* authenticate(action) {
    // yield fork(saga.handleAPIRequest, UserAPI.authenticate, action.payload.data);
    // const authSuccessAction = yield take(ActionTypes.AUTH_SUCCESS, ActionTypes.AUTH_FAILED);
    // yield fork(saga.handleAPIRequest, UserAPI.getUserInfo);
    // const userInfoSuccessAction = yield take(ActionTypes.FETCH_USER_INFO_SUCCESS, ActionTypes.FETCH_USER_INFO_FAILED);

    // yield call([AsyncStorage, 'setItem'], AUTH_DATA_STORE_KEY, JSON.stringify(authSuccessAction.payload.data));
    // yield call([AsyncStorage, 'setItem'], USER_INFO_STORE_KEY, JSON.stringify(userInfoSuccessAction.payload.data));

    yield put(DashboardActions.navigateToDashboard());
}

function* handleLogout() {
    yield call([AsyncStorage, 'removeItem'], USER_INFO_STORE_KEY);
    yield call([AsyncStorage, 'removeItem'], AUTH_DATA_STORE_KEY);
    yield put(Actions.navigateToLogin());
}

function* getCovidStatus() {
    yield fork(saga.handleAPIRequest, UserAPI.getCovidStatus);
    const covidStatusRequest = yield take(ActionTypes.GET_COVID_STATUS_API_SUCCESS);
    const country_data = _.filter(covidStatusRequest.payload.data.locations, { country: 'India' });
    yield put(Actions.covidStatusRate({ overall_status: covidStatusRequest.payload.data.latest, country_status: country_data }));
}

function* setYourPincode(action) {
    yield call([AsyncStorage, 'setItem'], PINCODE_STORE_KEY, JSON.stringify(action.payload.data));
}

export default function* userSaga() {
    yield all([
        takeLatest(ActionTypes.AUTHENTICATE, authenticate),
        takeLatest(CommonActionTypes.LOG_OUT, handleLogout),
        takeLatest(ActionTypes.GET_COVID_STATUS, getCovidStatus),
        takeLatest(ActionTypes.SET_YOUR_PINCODE, setYourPincode),
    ]);
}