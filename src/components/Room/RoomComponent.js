import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Card, Button } from 'react-native-elements';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import VoteModal from './Voting/VoteModal';
import RankedVoteModal from './Voting/RankedVoteModal';
import AddRestuarantButton from '../Restaurants/AddRestaurantButton';

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
    state={showModal: false};
    componentDidMount() {
        this.refs.messagesView.scrollToEnd({ animated: false });
    }

    //renderVotingModal() {
    //    const { room } = this.props;
    //    if (room.isVoting) {
    //        if (room.roomType == "ranked") {
    //            return(<RankedVoteModal room = {room}/>);
    //        }
    //        else if (room.roomType == "single") {
    //            return(<VoteModal room = {room}/>);
    //        }
    //        else if (room.roomType == "random") {
    //            //No Modal
    //        }
            /*
             **For bonus if implemented
             *else if (room.roomType=="swipe"){
             *return(<SwipeVoteModal/>)  ;  
             *}
             */
    //    }
    //}

    renderModal(){
        if(this.state.showModal){
            return(
                <RankedVoteModal currentRoom = {this.props.room}/>
            );
        }
    }

    onButtonPress(){
        this.setState({showModal:true});
    }

    render() {
        const { messages, room } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.messagesContainer}>
                    <Button
                        large title = "Show Modal"
                        onPress = {this.onButtonPress.bind(this)}
                    />
                    <ScrollView ref="messagesView">
                        {!messages.isLoading &&
                            <MessagesList messages={messages} />
                        }
                    </ScrollView>
                </View>
                <View style={styles.sendContainer}>
                    <MessagesFormContainer roomId={room.id} />
                </View>

                {this.renderModal()}
            </View>

        );
    }

}


{/* <Card title={room.roomDesc} >
<Text h3>This rooms code is {room.roomCode}</Text>
</Card>                 />
*/}
