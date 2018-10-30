import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RoomJoin from './RoomJoin';
import { joinRoom } from '../../actions/rooms';

const validate = (values) => {
    const errors = {};

    if (!values.roomCode) {
        errors.password = 'Password is required';
    } else if (values.roomCode.length !==6) {
        errors.password = 'Password is too short';
    }

    return errors;
};

const container = ({error, handleSubmit}) => (
    <RoomJoin
        error={error}
        handleSubmit={handleSubmit}
        onSubmit={joinRoom}
    />
);

RoomJoinContainer = reduxForm({
    form: "RoomJoin",
    validate
})(container);

export default connect(null, {joinRoom})(RoomJoinContainer);
