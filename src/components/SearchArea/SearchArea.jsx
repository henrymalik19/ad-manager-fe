import React , { Component } from 'react';
import './SearchArea.css';

class SearchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dropDownVal: 'user',
        }
    }

    render() {

        if(this.props.disableInput) {

        }
        return (
            <form className="SearchArea" onSubmit={(e) => this.props.searchAD(e, this.state.value, this.state.dropDownVal)} >
                <select  className="SearchArea-Dropdown" onChange={e => {this.setState({dropDownVal: e.target.value})}}>
                    <option selected value="user">User</option>
                    <option value="group">Group</option>
                </select>
                <input 
                    type="text" 
                    className="SearchArea-SearchBox" 
                    placeholder="Enter Name Here..." 
                    value={this.state.value} onChange={e => this.setState({value: e.target.value})} 
                    disabled={this.props.disableInput}
                />
            </form>
        );
    }
};

export default SearchArea;