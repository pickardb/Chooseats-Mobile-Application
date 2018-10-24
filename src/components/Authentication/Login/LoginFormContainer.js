import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm';
import { loginUser } from '../../../actions/users';

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

const container = ({ error, handleSubmit, isLoggingIn }) => (
    <LoginForm
        error={error}
        handleSubmit={handleSubmit}
        onSubmit={loginUser}
        isLoggingIn={isLoggingIn}
        
    />
);

LoginFormContainer = reduxForm({
    form: 'Login',
    validate,
    enableReinitialize: true
})(container);

const mapStatetoProps = state => {
    return{
    isLoggingIn: state.user.isLoggingIn
    };
};

export default connect(mapStatetoProps, { loginUser })(LoginFormContainer);