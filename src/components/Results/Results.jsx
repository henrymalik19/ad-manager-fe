import React, { Component } from 'react';
import './Results.css';

// Import COmponents
import List from '../List/List';
import DetailList from '../List/DetailList';

class Results extends Component {
    constructor(props) {
        super(props);  
        
        this.state = {
            detailData: ''
        }
    }

    listItemClick(listData) {        
        this.setState({ detailData: listData});
    }

    render() {
        return (
            <div className="Results">
                <List searchData={this.props.searchData} listItemClick={this.listItemClick.bind(this)} />
                <DetailList detailData={this.state.detailData} />
            </div>
        )
    }
};

export default Results;