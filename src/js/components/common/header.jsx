import React from 'react';
import NavBar from './navbar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav>
                <NavBar />
            </nav>
        );
    }
}

export default Header;
