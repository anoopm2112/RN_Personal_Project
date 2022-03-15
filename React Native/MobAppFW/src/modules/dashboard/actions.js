import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as DASHBOARD_ROUTE_KEYS } from './constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export function navigateToDashboard() {
    return navigateWithReset(MODULE_ROUTE_KEYS.DASHBOARD, { screen: DASHBOARD_ROUTE_KEYS.HOME });
}

export function navigateToVaccineList(data) {
    return navigate(MODULE_ROUTE_KEYS.DASHBOARD, { screen: DASHBOARD_ROUTE_KEYS.VACCINELIST, params: { data } });
}

export const types = {
    SEARCH_BY_PINCODE: 'Dashboard/SEARCH_BY_PINCODE',
    SEARCH_BY_PINCODE_API_REQUEST: 'Dashboard/SEARCH_BY_PINCODE_API_REQUEST',
    SEARCH_BY_PINCODE_API_SUCCESS: 'Dashboard/SEARCH_BY_PINCODE_API_SUCCESS',
    SEARCH_BY_PINCODE_API_FAILED: 'Dashboard/SEARCH_BY_PINCODE_API_FAILED',
    GET_STATE: 'Dashboard/GET_STATE',
    GET_STATE_API_REQUEST: 'Dashboard/GET_STATE_API_REQUEST',
    GET_STATE_API_SUCCESS: 'Dashboard/GET_STATE_API_SUCCESS',
    GET_STATE_API_FAILED: 'Dashboard/GET_STATE_API_FAILED',
    GET_DISTRICT: 'Dashboard/GET_DISTRICT',
    GET_DISTRICT_API_REQUEST: 'Dashboard/GET_DISTRICT_API_REQUEST',
    GET_DISTRICT_API_SUCCESS: 'Dashboard/GET_DISTRICT_API_SUCCESS',
    GET_DISTRICT_API_FAILED: 'Dashboard/GET_DISTRICT_API_FAILED',
    FIND_BY_DISTRICT: 'Dashboard/FIND_BY_DISTRICT',
    FIND_BY_DISTRICT_API_REQUEST: 'Dashboard/FIND_BY_DISTRICT_API_REQUEST',
    FIND_BY_DISTRICT_API_SUCCESS: 'Dashboard/FIND_BY_DISTRICT_API_SUCCESS',
    FIND_BY_DISTRICT_API_FAILED: 'Dashboard/FIND_BY_DISTRICT_API_FAILED',
    SET_SURVEY_DATA_PERIODIC_SYNC_ID: 'Dashboard/SET_SURVEY_DATA_PERIODIC_SYNC_ID',
    SEARCH_SAVED_PINCODE: 'Dashboard/SEARCH_SAVED_PINCODE'
};

export function searchByPincode() {
    return action(types.SEARCH_BY_PINCODE);
}

export function getState() {
    return action(types.GET_STATE);
}

export function getDistrict(data) {
    return action(types.GET_DISTRICT, { data });
}

export function findByDistricts() {
    return action(types.FIND_BY_DISTRICT);
}

export function setSurveyDataPeriodicSyncId(data) {
    return action(types.SET_SURVEY_DATA_PERIODIC_SYNC_ID, { data });
}

export function searchSavedPincode(data) {
    return action(types.SEARCH_SAVED_PINCODE, { data });
}