import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';

const socket = io('http://35.202.171.59');

// Configure feathers-client
export default feathersClient = feathers()
    .configure(socketio(socket, {
        pingInterval: 10000,
        pingTimeout: 5000
    }))
    .configure(auth());