import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { feathersClient } from '../../../feathers/index';
import { signupUser } from '../../../actions/users';

import SignupFormComponent from './FormComponent';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password is too short';
    }

    return errors;
};

const container = ({ error, handleSubmit, _signup }) => (
    <SignupFormComponent
        handleSubmit={handleSubmit}
        onSubmit={signupUser}
        error={error}
    />
);

const mapStateToProps = state => ({
    auth: state.auth,
});

SignupFormContainer = reduxForm({
    form: 'signIn',
    validate
})(container);

export default connect(mapStateToProps)(SignupFormContainer);


