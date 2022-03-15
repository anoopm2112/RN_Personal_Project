import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RegisterView } from '../components';
import * as UserActions from '../actions';

class Register extends React.Component {
    render() {
        return (
            <RegisterView {...this.props} />
        )
    }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
    yourPincode: (data) => dispatch(UserActions.setYourPincode(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);