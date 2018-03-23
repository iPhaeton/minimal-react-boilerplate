import * as React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <div>This is About page</div>
            <Link to={'/'}>Home</Link>
        </div>
    )
}