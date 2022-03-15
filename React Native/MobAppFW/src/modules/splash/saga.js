import { all, takeLatest, call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import * as SplashActions from './actions';
import * as UserActions from '../user/actions';
import * as DashboardActions from '../dashboard/actions';
import { AUTH_DATA_STORE_KEY, USER_INFO_STORE_KEY } from '../user/constants';

const { types: ActionTypes } = SplashActions;

function* runPreliminaryChecks() {
    let authData = yield call([AsyncStorage, 'getItem'], AUTH_DATA_STORE_KEY);
    authData = authData ? JSON.parse(authData) : null;
    let userInfo = yield call([AsyncStorage, 'getItem'], USER_INFO_STORE_KEY);
    userInfo = userInfo ? JSON.parse(userInfo) : null;
    yield put(UserActions.navigateToOnBoard());

    // if (authData && userInfo) {
    //     yield put(UserActions.setAuthDataFromPersistantStorage(authData));
    //     yield put(UserActions.setUserInfoFromPersistantStorage(userInfo));

    //     yield put(DashboardActions.navigateToDashboard());
    // } else {
        // yield put(UserActions.navigateToLogin());
        // yield put(UserActions.navigateToOnBoard());
        // yield put(DashboardActions.navigateToDashboard());
    // }
}

export default function* splashSaga() {
    yield all([
        takeLatest(ActionTypes.RUN_PRELIMINARY_CHECKS, runPreliminaryChecks)
    ]);
}