import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function searchByPin(params) {
    let payload = {
        types: [ActionTypes.SEARCH_BY_PINCODE_API_REQUEST, ActionTypes.SEARCH_BY_PINCODE_API_SUCCESS, ActionTypes.SEARCH_BY_PINCODE_API_FAILED],
        params
    };
    return {
        endpoint: 'appointment/sessions/public/findByPin',
        api: restAPI.get,
        payload
    };
}

export function getStateList() {
    let payload = {
        types: [ActionTypes.GET_STATE_API_REQUEST, ActionTypes.GET_STATE_API_SUCCESS, ActionTypes.GET_STATE_API_FAILED],
    };
    return {
        endpoint: 'admin/location/states',
        api: restAPI.get,
        payload
    };
}

export function getDistrictList({ district_id }) {
    let payload = {
        types: [ActionTypes.GET_DISTRICT_API_REQUEST, ActionTypes.GET_DISTRICT_API_SUCCESS, ActionTypes.GET_DISTRICT_API_FAILED],
    };
    return {
        endpoint: `admin/location/districts/${district_id}`,
        api: restAPI.get,
        payload
    };
}

export function findByDistricts(params) {
    let payload = {
        types: [ActionTypes.FIND_BY_DISTRICT_API_REQUEST, ActionTypes.FIND_BY_DISTRICT_API_SUCCESS, ActionTypes.FIND_BY_DISTRICT_API_FAILED],
        params
    };
    return {
        endpoint: 'appointment/sessions/public/findByDistrict',
        api: restAPI.get,
        payload
    };
}