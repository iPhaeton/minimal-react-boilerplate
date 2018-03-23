import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'Routes';
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
