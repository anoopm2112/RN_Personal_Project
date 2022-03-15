import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getDashboard = state => state[STATE_REDUCER_KEY];

const sideBar = dashboard => dashboard.sideBar;
export const getSideBarData = flow(getDashboard, sideBar);

const stateList = dashboard => dashboard.states;
export const getStateList = flow(getDashboard, stateList);

const districtsList = dashboard => dashboard.districts;
export const getDistrictsList = flow(getDashboard, districtsList);

const surveyDataPeriodicSyncId = dashboard => dashboard.surveyDataPeriodicSyncId;
export const getSurveyDataPeriodicSyncId = flow(getDashboard, surveyDataPeriodicSyncId);