import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';

<<<<<<< HEAD
const socket = io('http://10.200.1.118:3030/');
=======
const socket = io('http://192.168.1.111:3030/');
>>>>>>> 2ad78d78adbef410fc7e9aa913725e2771ed2a04

// Configure feathers-client
const feathersClient = feathers()
    .configure(socketio(socket, {
        pingInterval: 10000,
        pingTimeout: 5000
    }))
    .configure(auth());

export default feathersClient;