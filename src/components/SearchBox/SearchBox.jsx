import React , { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {

        if(this.props.disableInput) {

        }
        return (
            <form onSubmit={(e) => this.props.getUsers(e, this.state.value)} >
                <input 
                    type="text" 
                    className="SearchBox" 
                    placeholder="Enter Name Here..." 
                    value={this.state.value} onChange={e => this.setState({value: e.target.value})} 
                    disabled={this.props.disableInput}
                />
            </form>
        );
    }
};

export default SearchBox;