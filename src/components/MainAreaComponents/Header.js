import React , { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <input type="text" className="Header-SearchBox" placeholder="Enter Name Here..." onKeyPress={this.props.getUsers} />
            </div>
        );
    }
};

export default Header;