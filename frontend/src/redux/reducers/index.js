import { combineReducers } from 'redux';
import cityReducer from './cityReducer.js';
import ideaReducer from './ideaReducer';
import teamReducer from './teamReducer';
import userReducer from './userReducer';
import roleReducer from './roleReducer';
import businessmodelReducer from './businessmodelReducer';
import loginReducer from './loginReducer';

export default combineReducers({

    cities: cityReducer,
    ideas: ideaReducer,
    users: userReducer,
    teams: teamReducer,
    roles: roleReducer,
    businessmodels : businessmodelReducer,
    logins: loginReducer

});