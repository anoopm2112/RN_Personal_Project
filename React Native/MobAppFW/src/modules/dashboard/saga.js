import { all, takeLatest, fork, put, take, call } from 'redux-saga/effects';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import * as DashboardActions from './actions';
import { saga } from '../../common';
import * as DashboardAPI from './api';
import * as Actions from './actions';
import { PINCODE_STORE_KEY } from '../user/constants';

const { types: ActionTypes } = DashboardActions;

function* searchByPincode() {
    const pincodeRequest = {
        pincode: '679308',
        date: '12-06-2021'
    }
    yield fork(saga.handleAPIRequest, DashboardAPI.searchByPin, pincodeRequest);
    const searchByPincodeSuccessAction = yield take(ActionTypes.SEARCH_BY_PINCODE_API_SUCCESS);
    yield put(Actions.na / vigateToVaccineList(searchByPincodeSuccessAction.payload.data));
}

function* searchSavedPincode() {
    let pincodeData = yield call([AsyncStorage, 'getItem'], PINCODE_STORE_KEY);
    pincodeData = pincodeData ? JSON.parse(pincodeData) : null;
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear();
    const pincodeRequest = {
        pincode: pincodeData,
        date: `${date}-${month}-${year}`
    }
    yield fork(saga.handleAPIRequest, DashboardAPI.searchByPin, pincodeRequest);
    const searchSavedPincodeSuccessAction = yield take(ActionTypes.SEARCH_BY_PINCODE_API_SUCCESS);
    console.log('CAPACITY',searchSavedPincodeSuccessAction.payload.data.sessions[0].available_capacity);

}

function* getState() {
    yield fork(saga.handleAPIRequest, DashboardAPI.getStateList);
}

function* getDistrict(action) {
    yield fork(saga.handleAPIRequest, DashboardAPI.getDistrictList, action.payload.data);
}

function* findByDistricts() {
    const districtsRequest = {
        district_id: '512',
        date: '31-03-2021'
    }
    yield fork(saga.handleAPIRequest, DashboardAPI.findByDistricts, districtsRequest);
    const findByDistrictsSuccessAction = yield take(ActionTypes.FIND_BY_DISTRICT_API_SUCCESS);
    yield put(Actions.navigateToVaccineList(findByDistrictsSuccessAction.payload.data));
}

export default function* dashboardSaga() {
    yield all([
        takeLatest(ActionTypes.SEARCH_BY_PINCODE, searchByPincode),
        takeLatest(ActionTypes.GET_STATE, getState),
        takeLatest(ActionTypes.GET_DISTRICT, getDistrict),
        takeLatest(ActionTypes.FIND_BY_DISTRICT, findByDistricts),
        takeLatest(ActionTypes.SEARCH_SAVED_PINCODE, searchSavedPincode),
    ]);
}