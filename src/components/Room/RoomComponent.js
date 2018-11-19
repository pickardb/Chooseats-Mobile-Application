import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Card, Button } from 'react-native-elements';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import VoteModal from './Voting/VoteModal';
import SelectedRestaurantModal from './Voting/SelectedRestaurantModal';
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
        console.log(this.props);
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
        }
        else if(room.roomState=="done"){
            return <SelectedRestaurantModal restaurant_info = {this.props.restaurant_info} googlePlacesId = {room.selectedRestaurant} onRequestClose={() => this.setState({ showModal: false })}/>
        }
            /*
             **For bonus if implemented
             *else if (room.roomType=="swipe"){
             *return(<SwipeVoteModal/>)  ;  
             *}
             */


    }

    onButtonPress(){
        this.setState({trigger:!this.state.trigger});
        this.props.startVoting(this.props.room);
        this.props.getRooms();
        
    }

    renderButton(){
        const {room} = this.props;
        if(room.isAdmin&&room.restaurants.length>0&&room.roomState=="starting"){
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
