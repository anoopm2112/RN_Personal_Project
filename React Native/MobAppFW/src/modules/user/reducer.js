import { types as ActionTypes } from './actions';
import { actions as CommonActions } from '../../common';

const initialState = {
    authData: {},
    info: {},
    login: {
        isAuthenticating: false,
        showErrorLabel: false
    },
    covidStatus: {
        covidStatusData: []
    },
    covidStatusRate: {
        covidStatusRate: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_REQUEST:
        case ActionTypes.FETCH_USER_INFO_REQUEST:
            return Object.assign({}, state, {
                login: {
                    isAuthenticating: true,
                    showErrorLabel: false
                }
            });
        case ActionTypes.AUTH_SUCCESS:
        case CommonActions.types.REFRESH_TOKEN_API_SUCCESS:
            return Object.assign({}, state, {
                authData: {
                    ...action.payload.data
                },
            });
        case ActionTypes.FETCH_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                login: {
                    isAuthenticating: false,
                    showErrorLabel: false
                },
                info: {
                    ...action.payload.data
                }
            });
        case ActionTypes.AUTH_FAILED:
        case ActionTypes.FETCH_USER_INFO_FAILED:
            return Object.assign({}, state, {
                login: {
                    isAuthenticating: false,
                    showErrorLabel: true
                }
            });
        case ActionTypes.GET_COVID_STATUS_API_SUCCESS:
            return Object.assign({}, state, {
                covidStatus: {
                    covidStatusData: action.payload.data,
                }
            });
        case ActionTypes.COVID_STATUS_RATE:
            return Object.assign({}, state, {
                covidStatusRate: {
                    covidStatusRate: action.payload.data,
                }
            });
        default:
            return state;
    }
}