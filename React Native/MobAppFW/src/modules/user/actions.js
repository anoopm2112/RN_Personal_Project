import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as USER_ROUTE_KEYS } from './constants';

const { action, navigation: { navigateWithReset, navigate } } = actions;

export function navigateToOnBoard() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.ONBOARD });
}

export function navigateToLogin() {
    return navigateWithReset(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.LOGIN_FORM });
}

export function navigateToDashboard() {
    return navigateWithReset(MODULE_ROUTE_KEYS.DASHBOARD);
}

export function navigateToRegister() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.REGISTER });
}

export const types = {
    AUTHENTICATE: 'User/AUTHENTICATE',
    AUTH_REQUEST: 'User/AUTH_REQUEST',
    AUTH_SUCCESS: 'User/AUTH_SUCCESS',
    AUTH_FAILED: 'User/AUTH_FAILED',
    FETCH_USER_INFO_REQUEST: 'User/FETCH_USER_INFO_REQUEST',
    FETCH_USER_INFO_SUCCESS: 'User/FETCH_USER_INFO_SUCCESS',
    FETCH_USER_INFO_FAILED: 'User/FETCH_USER_INFO_FAILED',
    LOGOUT_API_REQUEST: 'User/LOGOUT_API_REQUEST',
    LOGOUT_API_SUCCESS: 'User/LOGOUT_API_SUCCESS',
    LOGOUT_API_FAILED: 'User/LOGOUT_API_FAILED',
    GET_COVID_STATUS: 'User/GET_COVID_STATUS',
    GET_COVID_STATUS_API_REQUEST: 'User/GET_COVID_STATUS_API_REQUEST',
    GET_COVID_STATUS_API_SUCCESS: 'User/GET_COVID_STATUS_API_SUCCESS',
    GET_COVID_STATUS_API_FAILED: 'User/GET_COVID_STATUS_API_FAILED',
    COVID_STATUS_RATE: 'User/COVID_STATUS_RATE',
    SET_YOUR_PINCODE: 'User/SET_YOUR_PINCODE'
}

export function authenticate(data) {
    return action(types.AUTHENTICATE, { data });
}

export function setAuthDataFromPersistantStorage(data) {
    return action(types.AUTH_SUCCESS, { data });
}

export function setUserInfoFromPersistantStorage(data) {
    return action(types.FETCH_USER_INFO_SUCCESS, { data });
}

export function logout() {
    return action(actions.types.LOG_OUT);
}

export function getCovidStatus() {
    return action(types.GET_COVID_STATUS);
}

export function covidStatusRate(data) {
    return action(types.COVID_STATUS_RATE, { data });
}

export function setYourPincode(data) {
    return action(types.SET_YOUR_PINCODE, { data });
}