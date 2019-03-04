import React from 'react';
import './Results.css';

// Import COmponents
import List from '../List/List';
import DetailList from '../List/DetailList';

function Results(props) {
    return (
        <div className="Results">
            <List searchData={props.searchData} listItemClick={props.listItemClick} />
            <DetailList detailData={props.detailData} />
        </div>
    )
};

export default Results;