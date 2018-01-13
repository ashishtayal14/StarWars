import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.Logout = this.Logout.bind(this);
    }
    Logout() {
        console.log(this.props);
        window.localStorage.removeItem("status");
        window.location.href = "/";
    }
    render() {
        return (window.localStorage.getItem("status") &&
                <li><a onClick={this.Logout}>LOG OUT</a>
                </li>
        );
    }
}

export default Logout;
