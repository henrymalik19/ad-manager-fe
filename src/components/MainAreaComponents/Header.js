import React , { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        if(this.props.disableInput) {

        }
        return (
            <div className="Header">
                <input type="text" className="Header-SearchBox" placeholder="Enter Name Here..." onKeyPress={this.props.getUsers} disabled={this.props.disableInput}/>
            </div>
        );
    }
};

export default Header;