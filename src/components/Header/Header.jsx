import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h2 className="Header-Title"><a href='/'>AD Manager</a></h2>
            </div>
        );
    }
};

export default Header;