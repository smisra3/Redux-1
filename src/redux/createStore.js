import {createStore} from "redux";
import mainReducers from './reducers/mainReducers';

const createStoreInstance = () => {
    const tempStore = createStore(
        //mainReducers es = a reducer solo se cambia de ubicación por separar el código
        //Movemos una función de un archivo a otro
        mainReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return tempStore;
};

export default createStoreInstance;

