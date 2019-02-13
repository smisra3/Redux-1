import { combineReducers } from 'redux';
import cityReducer from './cityReducer.js';
import ideaReducer from './ideaReducer';
import teamReducer from './teamReducer';
import userReducer from './userReducer';

export default combineReducers({

    cities: cityReducer,
    ideas: ideaReducer,
    users: userReducer,
    teams: teamReducer

});