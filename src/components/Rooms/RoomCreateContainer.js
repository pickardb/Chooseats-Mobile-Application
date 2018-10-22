import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RoomCreate from './RoomCreate';
import {createRoom} from '../../actions/rooms';

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Email address is required';
    }

    if (!values.description) {
        errors.description = 'Description is required';
    } 
    return errors;
};

const container = ({error, handleSubmit}) => (
    <RoomCreate
        error={error}
        handleSubmit={handleSubmit}
        onSubmit={createRoom}
    />
);

RoomCreateContainer = reduxForm({
    form: 'Create',
    validate
})(container);

export default connect(null,{createRoom})(RoomCreateContainer);