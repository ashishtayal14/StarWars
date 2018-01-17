import React from 'react';
import { withRouter } from 'react-router-dom'

const Logout = withRouter(({history}) => {
    return (
        window.localStorage.getItem("status") &&
        <li><a onClick={() => { 
            window.localStorage.removeItem("status");
            window.localStorage.removeItem("username");
            history.push("/");
        }}>LOG OUT</a>
        </li>
    );
}
);

export default Logout;
