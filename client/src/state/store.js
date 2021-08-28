import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const initialState = {}; // initial state is handled by the specific reducers

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
