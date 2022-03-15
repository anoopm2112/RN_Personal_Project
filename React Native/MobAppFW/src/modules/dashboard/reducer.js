import { actions as CommonActions } from '../../common';
import * as Actions from './actions';

const { types: CommonActionsTypes } = CommonActions;

const initialState = {
    sideBar: {
        currentRoute: undefined
    },
    states: {
        data: [],
        refreshing: false
    },
    districts: {
        districtsData: [],
        refreshing: false
    },
    surveyDataPeriodicSyncId: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CommonActionsTypes.ROUTE_CHANGED:
            return Object.assign({}, state, {
                sideBar: {
                    currentRoute: action.payload.name
                }
            });
        case Actions.types.GET_STATE_API_SUCCESS:
            return Object.assign({}, state, {
                states: {
                    data: action.payload.data.states
                }
            });
        case Actions.types.GET_DISTRICT_API_SUCCESS:
            return Object.assign({}, state, {
                districts: {
                    districtsData: action.payload.data.districts
                }
            });
        case Actions.types.SET_SURVEY_DATA_PERIODIC_SYNC_ID:
            return Object.assign({}, state, {
                surveyDataPeriodicSyncId: action.payload.data
            });
        default:
            return state;
    }
}