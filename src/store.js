import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, promiseMiddleware()))
);

export default store;