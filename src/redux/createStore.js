import { createStore, combineReducers } from "redux";
import mainReducers from './reducers/mainReducers';

import cityReducer from './reducers/cityReducer';
import teamReducer from './reducers/teamReducer';
import userReducer from './reducers/userReducer';

const createStoreInstance = () => {
    const tempStore = createStore(
        combineReducers({
            cities : cityReducer,
            users : userReducer,
            teams : teamReducer,
        }),
        //mainReducers es = a reducer solo se cambia de ubicación por separar el código
        //Movemos una función de un archivo a otro
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return tempStore;
};

export default createStoreInstance;

