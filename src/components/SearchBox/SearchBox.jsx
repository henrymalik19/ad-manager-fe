import React , { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {

    render() {

        if(this.props.disableInput) {

        }
        return (
            <input type="text" className="SearchBox" placeholder="Enter Name Here..." onKeyPress={this.props.getUsers} disabled={this.props.disableInput}/>
        );
    }
};

export default SearchBox;