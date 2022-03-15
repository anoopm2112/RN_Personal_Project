import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function authenticate({ username, password }) {
    let payload = {
        body: { username, password },
        types: [ActionTypes.AUTH_REQUEST, ActionTypes.AUTH_SUCCESS, ActionTypes.AUTH_FAILED]
    };
    return {
        endpoint: 'users/login',
        api: restAPI.post,
        payload
    };
}

export function getUserInfo() {
    let payload = {
        types: [ActionTypes.FETCH_USER_INFO_REQUEST, ActionTypes.FETCH_USER_INFO_SUCCESS, ActionTypes.FETCH_USER_INFO_FAILED]
    };
    return {
        endpoint: 'account/get-profile',
        api: restAPI.get,
        payload,
    };
}

export function getCovidStatus() {
    let payload = {
        types: [ActionTypes.GET_COVID_STATUS_API_REQUEST, ActionTypes.GET_COVID_STATUS_API_SUCCESS, ActionTypes.GET_COVID_STATUS_API_FAILED],
        isAuthCall: true
    };
    return {
        endpoint: 'v2/locations',
        api: restAPI.get,
        payload,
    };
}

