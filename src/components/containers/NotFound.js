import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>
                404 NotFound!
            </h1>
            <Link to="/login">
                    Go back to login.
            </Link>
        </div>
    )
}

export default NotFound;