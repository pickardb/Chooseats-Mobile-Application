import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { createRoom } from '../../actions/rooms';

class RoomCreate extends Component {
    onButtonPress() {
        this.props._createRoom();
    }

    componentDidMount() {
        console.log("New Room: " + this.props.newRoom);
    }

    renderRoomCode() {
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
    }

    render() {
        return (
            <View>
                <Card>
                    {this.renderRoomCode()}
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create a Room
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
};

const styles = {
    descriptTextStyle: {
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 10
    }
};

const mapStatetoProps = state => {
    return {
        newRoom: state.rooms.newRoom
    };
};

const mapDispatchToProps = dispatch => ({
    _createRoom: () => dispatch(createRoom),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomCreate);