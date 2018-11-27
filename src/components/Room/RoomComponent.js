import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import { Actions } from 'react-native-router-flux';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import RankedVoteModal from './Voting/RankedVoteModal';
import VoteModal from './Voting/VoteModal';
import RoomInfoModal from './RoomInfoModal';
import SelectedRestaurantModal from './Voting/SelectedRestaurantModal';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    toolbar: {
        backgroundColor: '#696969',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
};

export default class RoomContainer extends React.Component {
    state = { trigger: false };
    componentDidMount() {

    }

    renderVotingModal() {
        const { room } = this.props;
        if (room.roomState == "voting") {
            console.log('renderVotingModal: ' + room.roomType);
            if (room.roomType == "rank") {
                return (<RankedVoteModal currentRoom={room} />);
            }
            else if (room.roomType == "single") {
                return (<VoteModal currentRoom={room} />);
            }
            else if (room.roomType == "truerandom") {
                //No Modal
            }
            else {
                console.log("Hit last else in room component");
                console.log(room.roomType);
                return (<VoteModal currentRoom={room} />);
            }
        }
        /*
         **For bonus if implemented
         *else if (room.roomType=="swipe"){
         *return(<SwipeVoteModal/>)  ;  
         *}
         */


    }

    onButtonPress() {
        this.setState({ trigger: !this.state.trigger });
        this.props.startVoting(this.props.room);
        //this.props.getRooms();
    }

    tabs = () => {
        var tabs = [{
            key: 'restaurant',
            icon: 'restaurant',
            label: 'Restaurants',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'info',
            icon: 'info',
            label: 'Room Info',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        ];

        const { room } = this.props;

        if (room.isAdmin && room.restaurants.length > 0 && room.roomState == "starting") {
            tabs.push({
                key: 'vote',
                icon: 'playlist-play',
                label: 'Start Vote',
                barColor: '#388E3C',
                pressColor: 'rgba(255, 255, 255, 0.16)'
            });
        }

        if (room.roomState == "done") {
            tabs.push({
                key: 'selected',
                icon: 'star',
                label: 'Selected Restaurant',
                barColor: '#388E3C',
                pressColor: 'rgba(255, 255, 255, 0.16)'
            });
        }

        return tabs;
    };

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => {
        return (
            <FullTab
                key={tab.key}
                isActive={isActive}
                label={tab.label}
                renderIcon={this.renderIcon(tab.icon)}
            />
        )
    }

    handleTabPress = (newTab, oldTab) => {
        switch (newTab.key) {
            case 'restaurant':
                Actions.restaurantContainer();
                break;
            case 'info':
                this.setState({ roomInfoModal: true })
                break;
            case 'selected':
                this.setState({ selectedRestaurantModal: true });
                break;
            case 'vote':
                this.onButtonPress.bind(this)();
                break;
        }
    }


    render() {
        const { messages: { messages }, user, sendMessage, room } = this.props;

        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={messages}
                    user={{
                        _id: user.id,
                    }}
                    alwaysShowSend={true}
                    onSend={(values) => sendMessage(values, room.id)}
                    renderChatFooter={() =>
                        <BottomNavigation
                            style={{ elevation: 0 }}
                            onTabPress={() => console.log}
                            renderTab={this.renderTab}
                            tabs={this.tabs()}
                            onTabPress={this.handleTabPress}
                            defaultTab={'restaurant'}
                            activeTab={'restaurant'}
                        />
                    }
                />
                {this.state.selectedRestaurantModal && <SelectedRestaurantModal restaurant_info={this.props.restaurant_info} googlePlacesId={room.selectedRestaurant} onRequestClose={() => this.setState({ selectedRestaurantModal: false })} />}
                {this.renderVotingModal()}
                {this.state.roomInfoModal && <RoomInfoModal room={room} onRequestClose={() => this.setState({ roomInfoModal: false })} />}
            </View>

        );
    }

}


{/* <Card title={room.roomDesc} >
<Text h3>This rooms code is {room.roomCode}</Text>
</Card>                 />
*/}
