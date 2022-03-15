import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as UserActions from '../../user/actions';
import { OnBoardView } from '../components';
import { getUserCovidStatus, getUsercovidStatusRate } from '../selectors';

class OnBoard extends Component {
    render() {
        return(
            <OnBoardView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    userCovidStatus: getUserCovidStatus,
    usercovidStatusRate: getUsercovidStatusRate
});

const mapDispatchToProps = dispatch => ({
    navigateToLogin: () => dispatch(UserActions.navigateToDashboard()),
    getCovidStatus: () => dispatch(UserActions.getCovidStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(OnBoard);