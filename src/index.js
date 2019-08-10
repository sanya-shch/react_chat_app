import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import chat from './reducers';
import {addUser} from "./actions";

const store = createStore(chat);

store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
