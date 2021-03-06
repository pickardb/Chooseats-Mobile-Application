import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';
//http://chooseats.us-west-2.elasticbeanstalk.com
//http://192.168.1.187:3030
const socket = io('http://chooseats.us-west-2.elasticbeanstalk.com/');

// Configure feathers-client
const feathersClient = feathers()
    .configure(socketio(socket, {
        pingInterval: 10000,
        pingTimeout: 5000
    }))
    .configure(auth());

export default feathersClient;