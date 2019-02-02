import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/createStore';
import App from './App';

const store = createStore();

/*store.dispatch({
   type: 'ADD_TODO',
   data: {
       completed: false,
       tarea : 'Aprender Redux'
   }
});*/

ReactDOM.render((
    /*Siempre se le pasa el store*/
    <Provider store={store}>
        <App/>
    </Provider>),
        document.getElementById('root'));

