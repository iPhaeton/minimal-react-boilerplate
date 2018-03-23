import * as React from 'react';
import Home from 'components/Home';
import About from 'components/About';
import {Route} from 'react-router-dom';
import injectRoute from './injectRoute';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={injectRoute(() => import('components/About'))}/>
        </div>
    );
}