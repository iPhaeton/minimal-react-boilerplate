import * as React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <div>This is Home page</div>
            <Link to={'/about'}>About</Link>
        </div>
    )
}