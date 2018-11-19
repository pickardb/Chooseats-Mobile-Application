import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Card, Button } from 'react-native-elements';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import VoteModal from './Voting/VoteModal';
import RankedVoteModal from './Voting/RankedVoteModal';
import AddRestuarantButton from '../Restaurants/AddRestaurantButton';
import { Actions } from 'react-native-router-flux';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    messagesContainer: {
        flex: 9,
        backgroundColor: 'green'
    },
    sendContainer: {
        flex: 0,
        flexGrow: 1
    }
};

export default class RoomContainer extends React.Component {
    state={trigger: false};
    componentDidMount() {
        this.refs.messagesView.scrollToEnd({ animated: false });
    }

    renderVotingModal() {
        const { room } = this.props;
        if (room.roomState == "voting") {
            if (room.roomType == "rank") {
                return(<RankedVoteModal currentRoom = {room}/>);
            }
            else if (room.roomType == "single") {
                return(<VoteModal currentRoom = {room}/>);
            }
            else if (room.roomType == "random") {
                //No Modal
            }
            else{
                console.log("Hit last else in room component");
                console.log(room.roomType);
                return(<VoteModal currentRoom = {room}/>);
            }
            /*
             **For bonus if implemented
             *else if (room.roomType=="swipe"){
             *return(<SwipeVoteModal/>)  ;  
             *}
             */
        }

    }

    onButtonPress(){
        this.setState({trigger:!this.state.trigger});
        Actions.refresh({key:"RoomContainer"});
        this.props.startVoting(this.props.room);
    }

    renderButton(){
        const {room} = this.props;
        if(room.isAdmin){
            return(
                <Button
                    large title = "Begin Voting"
                    onPress = {this.onButtonPress.bind(this)}
                />
            );
        }
    }

    render() {
        const { messages, room } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.messagesContainer}>
               
                    <ScrollView ref="messagesView">
                    {this.renderButton()}
                        {!messages.isLoading &&
                            <MessagesList messages={messages} />
                        }
                    </ScrollView>
                </View>
                <View style={styles.sendContainer}>
                    <MessagesFormContainer roomId={room.id} />
                </View>

                {this.renderVotingModal()}
            </View>

        );
    }

}


{/* <Card title={room.roomDesc} >
<Text h3>This rooms code is {room.roomCode}</Text>
</Card>                 />
*/}
