import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import * as DashboardActions from '../actions';
// import { getSearchPin } from '../selectors';

import { VaccineListView } from '../components';

class VaccineList extends Component {
    render() {
        return (
            <VaccineListView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    // searchPin: getSearchPin
});

const mapDispatchToProps = dispatch => ({
    // searchByPincode : () => dispatch(DashboardActions.searchByPincode())
});
export default connect(mapStateToProps, mapDispatchToProps)(VaccineList);