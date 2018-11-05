import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { feathersClient } from '../../../feathers/index';
import { sendMessage } from '../../../actions/messages';

import MessagesFormComponent from './MessagesFormComponent';

const container = ({ error, handleSubmit, roomId }) => (
    <MessagesFormComponent
        handleSubmit={handleSubmit}
        onSubmit={sendMessage(roomId)}
        error={error}
    />
);

const mapStateToProps = (state) => ({
});

MessagesFormContainer = reduxForm({
    form: 'SendMessage'
})(container);

export default connect(mapStateToProps)(MessagesFormContainer);


