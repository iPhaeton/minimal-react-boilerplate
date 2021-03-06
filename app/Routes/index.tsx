import * as React from 'react';
import Home from 'components/Home';
import About from 'components/About';
import {Route} from 'react-router-dom';
import injectRoute from './injectRoute';

export default () => {
    return (
        <div>
            <Route exact path="/" component={injectRoute(() => ({
                component: import('components/Home'),
                sagas: [
                    import('components/Home/sagas'),
                ]
            }))}/>
            <Route exact path="/about" component={injectRoute(() => ({
                component: import('components/About'),
                reducers: {
                    about: import('components/About/reducer'),
                },
                sagas: [
                    import('components/About/sagas'),
                ]
            }))}/>
        </div>
    );
}