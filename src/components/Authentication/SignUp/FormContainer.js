import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { feathersClient, feathersServices } from '../../../feathers/index';
import { createUser } from '../../../actions/users';

import SignupFormComponent from './FormComponent';

const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
}


const container = ({ error, handleSubmit, _signup }) => (
    <SignupFormComponent
        handleSubmit={handleSubmit}
        onSubmit={createUser}
        error={error}
    />
);

const mapStateToProps = state => ({
    auth: state.auth,
});

SignupFormContainer = reduxForm({
    form: 'signIn',
})(container);

export default connect(mapStateToProps)(SignupFormContainer);


