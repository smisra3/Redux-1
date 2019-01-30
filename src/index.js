import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRouter from './component/AppRouter';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
