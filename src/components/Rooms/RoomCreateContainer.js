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

const renderRoomCode = () =>{
    if (this.props.newRoom) {
        return (
            <CardSection>
                <Text style={styles.descriptTextStyle} >
                    Your Room Code:
                </Text >
                <Text style={styles.descriptTextStyle}>
                    {this.props.newRoom}
                </Text>
            </CardSection>
        );
    }
    else {
        return (
            <CardSection>
                <Button onPress={handleSubmit(onSubmit)}>
                    Create a Room
                    </Button>
            </CardSection>
        );
    }
}

const container = ({error, handleSubmit}) => (
    <RoomCreate
        error={error}
        handleSubmit={handleSubmit}
        onSubmit={createRoom}
        renderRoomCode={renderRoomCode}
        newRoom={this.props.newRoom}
    />
);

const mapStatetoProps = state => {
    return {
        newRoom: state.rooms.newRoom
    };
};

RoomCreateContainer = reduxForm({
    form: 'Create',
    validate
})(container);

export default connect(mapStatetoProps,{createRoom})(RoomCreateContainer);