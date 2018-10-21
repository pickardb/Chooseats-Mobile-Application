import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RoomCreate from './RoomCreate';
import {createRoom} from '../../actions/rooms';

const container = ({error, handleSubmit}) => (
    <RoomCreate
        error={error}
        handleSubmit={handleSubmit}
        onSubmit={createRoom}
    />
);

RoomCreateContainer = reduxForm({
    form: 'Create'
})(container);

export default connect(null,{createRoom})(RoomCreateContainer);