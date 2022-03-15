import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BackgroundTimer from 'react-native-background-timer';

import * as DashboardActions from '../actions';
import * as UserActions from '../../user/actions';
import { getStateList, getDistrictsList } from '../selectors';

import { HomeView } from '../components';

class Home extends Component {

    componentDidMount() {
        let intervalId = BackgroundTimer.setInterval(() => {
            this.props.searchSavedPincode();
        }, 10000);
        this.props.setSurveyDataPeriodicSyncId(intervalId);
    }

    render() {
        return (
            <HomeView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    stateList: getStateList,
    districtsList : getDistrictsList
});

const mapDispatchToProps = dispatch => ({
    searchByPincode : () => dispatch(DashboardActions.searchByPincode()),
    getState: () => dispatch(DashboardActions.getState()),
    getDistrict: (data) => dispatch(DashboardActions.getDistrict(data)),
    findByDistricts : () => dispatch(DashboardActions.findByDistricts()),
    navigateRegister: () => dispatch(UserActions.navigateToRegister()),
    setSurveyDataPeriodicSyncId: (data) => dispatch(DashboardActions.setSurveyDataPeriodicSyncId(data)),
    searchSavedPincode: () => dispatch(DashboardActions.searchSavedPincode())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);