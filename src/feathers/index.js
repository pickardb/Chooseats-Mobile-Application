import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import reduxifyServices from 'feathers-redux';
import reduxifyAuthentication from 'feathers-reduxify-authentication';
import io from 'socket.io-client';

const socket = io('http://128.189.79.163:3030');

// Configure feathers-client
export const feathersClient = feathers()
    .configure(socketio(socket))
    .configure(auth());

// Create Redux Actions and reducers for Feathers services
export const feathersServices = reduxifyServices(feathersClient, ['users']);

// Reduxify feathers-authentication
export const feathersAuthentication = reduxifyAuthentication(feathersClient,
    {} // user must be verified to authenticate
);